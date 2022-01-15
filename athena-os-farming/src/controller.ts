import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/extPlayer';
import { ServerMarkerController } from '../../../server/streamers/marker';
import { ServerBlipController } from '../../../server/systems/blip';
import { InteractionController } from '../../../server/systems/interaction';
import { ItemFactory } from '../../../server/systems/item';
import { farmRegistry } from '../farmingLists/farmRegistry';
import { IFarming } from '../interfaces/iFarming';
import { OSFARMING_TRANSLATIONS } from './translations';

export class FarmingController {
    /**
     * Create all the spots and blips for the farms.
     * @returns None
     */
    static createSpots() {
        for (let x = 0; x < farmRegistry.length; x++) {
            if (farmRegistry[x].blip.isBlip) {
                ServerBlipController.append({
                    pos: farmRegistry[x].blip.position,
                    shortRange: true,
                    sprite: farmRegistry[x].blip.sprite,
                    color: farmRegistry[x].blip.color,
                    text: farmRegistry[x].blip.text,
                    scale: farmRegistry[x].blip.scale,
                    identifier: `${farmRegistry[x].routeName}-${x}`,
                });
            }

            for (let spot = 0; spot < farmRegistry[x].spots.positions.length; spot++) {
                if (farmRegistry[x].marker.isMarker) {
                    ServerMarkerController.append({
                        pos: {
                            x: farmRegistry[x].spots.positions[spot].x,
                            y: farmRegistry[x].spots.positions[spot].y,
                            z: farmRegistry[x].spots.positions[spot].z + 1,
                        },
                        type: farmRegistry[x].marker.type,
                        bobUpAndDown: farmRegistry[x].marker.bobUpAndDown,
                        rotate: farmRegistry[x].marker.rotate,
                        color: {
                            r: farmRegistry[x].marker.color.r,
                            g: farmRegistry[x].marker.color.g,
                            b: farmRegistry[x].marker.color.b,
                            a: farmRegistry[x].marker.color.a,
                        },
                        uid: `${farmRegistry[x].routeName}-${x}`,
                    });
                }

                InteractionController.add({
                    description: farmRegistry[x].spots.interactionText,
                    position: farmRegistry[x].spots.positions[spot],
                    callback: (player: alt.Player) => {
                        this.handleFarming(player, farmRegistry[x], farmRegistry[x].spots.positions[spot]);
                    },
                });
            }
        }
    }

    static async handleFarming(player: alt.Player, farmingData: IFarming, antiMacro: alt.Vector3) {
        if (farmingData.requiredTool != null) {
            const hasTool = playerFuncs.inventory.isInInventory(player, { name: farmingData.requiredTool });
            const toolItem = player.data.inventory[hasTool.index];
            if (!hasTool) {
                playerFuncs.emit.notification(player, OSFARMING_TRANSLATIONS.NO_TOOL);
                return;
            }

            if (player.getMeta(`IsFarming`) === true) {
                return;
            }
            if (player.getMeta(`Spotused-${antiMacro.x}`) === antiMacro.x) {
                playerFuncs.emit.notification(player, `[ANTIMACRO] - Already used this spot before.`);
                return;
            }
            player.setMeta(`Spotused-${antiMacro.x}`, antiMacro.x);
            player.setMeta(`IsFarming`, true);

            alt.setTimeout(() => {
                player.deleteMeta(`Spotused-${antiMacro.x}`);
            }, getRandomInt(60000, 180000));

            playerFuncs.emit.animation(
                player,
                farmingData.animation.dict,
                farmingData.animation.name,
                farmingData.animation.flags,
                farmingData.farmDuration,
            );

            alt.setTimeout(async () => {
                // Common Items
                const commonItemToAdd = await ItemFactory.getByName(
                    farmingData.outcome.common[getRandomInt(0, farmingData.outcome.common.length)],
                );
                const hasCommonItem = playerFuncs.inventory.isInInventory(player, { name: commonItemToAdd.name });

                // Rare Items
                const rareItemToAdd = await ItemFactory.getByName(
                    farmingData.outcome.rare[getRandomInt(0, farmingData.outcome.rare.length)],
                );
                const hasRareItem = playerFuncs.inventory.isInInventory(player, { name: rareItemToAdd.name });

                // Epic Items
                const epicItemToAdd = await ItemFactory.getByName(
                    farmingData.outcome.epic[getRandomInt(0, farmingData.outcome.epic.length)],
                );
                const hasEpicItem = playerFuncs.inventory.isInInventory(player, { name: epicItemToAdd.name });

                const emptySlot = playerFuncs.inventory.getFreeInventorySlot(player);
                switch (toolItem.data.rarity) {
                    case 'common': {
                        if (!hasCommonItem) {
                            playerFuncs.inventory.inventoryAdd(player, commonItemToAdd, emptySlot.slot);
                            playerFuncs.emit.notification(player, `You've found ${commonItemToAdd.name}!`);
                        } else {
                            player.data.inventory[hasCommonItem.index].quantity += 1;
                            playerFuncs.emit.notification(player, `You've found ${commonItemToAdd.name}!`);
                        }

                        player.data.inventory[hasTool.index].data.durability -= 1;
                        if (player.data.inventory[hasTool.index].data.durability <= 1) {
                            playerFuncs.inventory.findAndRemove(player, farmingData.requiredTool);
                        }

                        playerFuncs.save.field(player, 'inventory', player.data.inventory);
                        playerFuncs.sync.inventory(player);
                        break;
                    }
                    case 'rare': {
                        break;
                    }
                    case 'epic': {
                        break;
                    }
                    default: {
                        break;
                    }
                }
                player.deleteMeta(`IsFarming`);
            }, farmingData.farmDuration);
        }
    }
}

/**
 * Generate a random integer between two numbers.
 * @param {number} min - The minimum number in the range.
 * @param {number} max - number
 * @returns A random integer between min and max.
 */
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
