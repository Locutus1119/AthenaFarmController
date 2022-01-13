import * as alt from 'alt-server';

export const farmingBlips = [
    {
        text: 'Miners Place.',
        sprite: 88,
        scale: 1,
        color: 40,
        pos: { x: 2912.41748046875, y: 2778.765380859375, z: 44.96366882324219 - 1 } as alt.Vector3,
    },
    {
        text: 'Woodfellers Place.',
        sprite: 801,
        scale: 1,
        color: 56,
        pos: { x: -474.09478759765625, y: 5587.1962890625, z: 69.96195220947266 } as alt.Vector3,
    },
////
//
{
    text: 'Tomato plantation',
    sprite: 88,
    scale: 1,
    color: 1,
    pos: { x: 322.28570556640625, y: 6487.79345703125, z: 29.161865234375} as alt.Vector3,
},

{
    text: 'Orange plantation',
    sprite: 88,
    scale: 1,
    color: 17,
    pos: { x: 350.9010925292969, y: 6516.77783203125, z: 28.5216064453125} as alt.Vector3,
},

{
    text: 'Salad plantation',
    sprite: 88,
    scale: 1,
    color: 2,
    pos: { x: 551.5120849609375, y: 6518.59765625, z: 29.819091796875} as alt.Vector3,
},

{
    text: 'Potato plantation',
    sprite: 88,
    scale: 1,
    color: 21,
    pos: { x: 545.1692504882812, y: 6517.595703125, z: 29.920166015625} as alt.Vector3,
},

{
    text: 'Pepper plantation',
    sprite: 88,
    scale: 1,
    color: 25,
    pos: { x: 393.6263732910156, y: 6594.98876953125, z: 28.5047607421875} as alt.Vector3,
},

{
    text: 'Vineyard',
    sprite: 88,
    scale: 1,
    color: 58,
    pos:  { x: -1888.3385009765625, y: 2049.62646484375, z: 140.977294921875} as alt.Vector3,
},

//
////




];

const miningPositions: alt.Vector3[] = [
    { x: 2975.733154296875, y: 2791.59716796875, z: 40.515140533447266 - 1 } as alt.Vector3,
    { x: 2966.3916015625, y: 2775.824462890625, z: 38.95657730102539 - 1 } as alt.Vector3,
    { x: 2951.238037109375, y: 2770.526611328125, z: 38.99069595336914 - 1 } as alt.Vector3,
    { x: 2937.0654296875, y: 2778.3662109375, z: 39.21839141845703 - 1 } as alt.Vector3,
    { x: 2927.2353515625, y: 2794.62744140625, z: 40.72378921508789 - 1 } as alt.Vector3,
    { x: 2932.526611328125, y: 2813.072021484375, z: 43.69724655151367 - 1 } as alt.Vector3,
    { x: 2947.60986328125, y: 2817.997802734375, z: 42.51972579956055 - 1 } as alt.Vector3,
    { x: 2966.80712890625, y: 2806.69384765625, z: 42.09012222290039 - 1 } as alt.Vector3,
    { x: 2953.723876953125, y: 2789.539794921875, z: 41.44651794433594 - 1 } as alt.Vector3,
];

export const woodPositions: alt.Vector3[] = [
    { x: -474.09478759765625, y: 5587.1962890625, z: 69.96195220947266 - 1 } as alt.Vector3,
    { x: -475.7586975097656, y: 5583.57177734375, z: 70.50320434570312 - 1 } as alt.Vector3,
    { x: -480.1531982421875, y: 5614.33544921875, z: 65.89505004882812 - 1 } as alt.Vector3,
    { x: -485.7178955078125, y: 5620.8798828125, z: 64.20068359375 - 1 } as alt.Vector3,
];

// Build it yourself, its free and open source, so what? ;)
export const tomatoPositions: alt.Vector3[] = [
    { x: 322.8791198730469, y: 6483.6923828125, z: 29.3304443359375 - 1 } as alt.Vector3,
    { x: 322.79998779296875, y: 6480.93603515625, z: 29.4820556640625 - 1 } as alt.Vector3,
    { x: 322.6549377441406, y: 6479.15625, z: 29.5662841796875 - 1 } as alt.Vector3,
    { x: 322.5890197753906, y: 6477.5078125, z: 29.6673583984375 - 1 } as alt.Vector3,
    { x: 322.6681213378906, y: 6475.6220703125, z: 29.7685546875 - 1 } as alt.Vector3,
    { x: 322.68133544921875, y: 6469.92529296875, z: 30.088623046875 - 1 } as alt.Vector3,
    { x: 322.6417541503906, y: 6468.052734375, z: 30.189697265625 - 1 } as alt.Vector3,
    { x: 322.72088623046875, y: 6467.0771484375, z: 30.2740478515625 - 1 } as alt.Vector3,
    { x: 322.6417541503906, y: 6465.12548828125, z: 30.4088134765625 - 1 } as alt.Vector3,
    { x: 322.6153869628906, y: 6463.97802734375, z: 30.5098876953125 - 1 } as alt.Vector3,
    { x: 322.6285705566406, y: 6462.38232421875, z: 30.6278076171875 - 1 } as alt.Vector3,

    
    
    // { },
];


export const orangePositions: alt.Vector3[] = [
    { x: 369.4945068359375, y: 6531.23095703125, z: 28.3868408203125 - 1 } as alt.Vector3,
    { x: 362.017578125, y: 6531.46826171875, z: 28.3363037109375 - 1 } as alt.Vector3,
    { x: 354.3296813964844, y: 6531.0859375, z: 28.3194580078125 - 1 } as alt.Vector3,
    { x: 345.8505554199219, y: 6530.68994140625, z: 28.7237548828125 - 1 } as alt.Vector3,
    { x: 338.05712890625, y: 6532.04833984375, z: 28.5384521484375 - 1 } as alt.Vector3,
    { x: 329.9736328125, y: 6531.5078125, z: 28.5721435546875 - 1 } as alt.Vector3,
    { x: 321.96923828125, y: 6530.703125, z: 29.161865234375 - 1 } as alt.Vector3,
    { x: 321.3758239746094, y: 6516.90966796875, z: 29.128173828125 - 1 } as alt.Vector3,
    { x: 329.8285827636719, y: 6517.34521484375, z: 28.9765625 - 1 } as alt.Vector3,
    { x: 338.4791259765625, y: 6516.67236328125, z: 28.94287109375 - 1 } as alt.Vector3,
    { x: 347.24835205078125, y: 6517.173828125, z: 28.791259765625 - 1 } as alt.Vector3,
    { x: 355.041748046875, y: 6516.90966796875, z: 28.201416015625 - 1 } as alt.Vector3,
    { x: 362.4791259765625, y: 6517.2001953125, z: 28.2520751953125 - 1 } as alt.Vector3,
    { x: 369.70550537109375, y: 6517.2265625, z: 28.3699951171875 - 1 } as alt.Vector3,
    { x: 377.9076843261719, y: 6517.068359375, z: 28.3699951171875 - 1 } as alt.Vector3,
    { x: 377.4065856933594, y: 6505.66162109375, z: 27.965576171875 - 1 } as alt.Vector3,
    { x: 370.5362548828125, y: 6506.16259765625, z: 28.4036865234375 - 1 } as alt.Vector3,
    { x: 362.4395751953125, y: 6506.16259765625, z: 28.5216064453125 - 1 } as alt.Vector3,
    { x: 354.8966979980469, y: 6505.5166015625, z: 28.5047607421875 - 1 } as alt.Vector3,
    { x: 348.4483642578125, y: 6505.92529296875, z: 28.7744140625 - 1 } as alt.Vector3,
    { x: 340.04833984375, y: 6506.0966796875, z: 28.6900634765625 - 1 } as alt.Vector3,
    { x: 331.0813293457031, y: 6506.13623046875, z: 28.5384521484375 - 1 } as alt.Vector3,
    { x: 320.9142761230469, y: 6505.8857421875, z: 29.2630615234375 - 1 } as alt.Vector3,
    
    
    // { },
];

export const saladPositions: alt.Vector3[] = [
    { x: 551.4066162109375, y: 6511.10791015625, z: 29.852783203125 - 1 } as alt.Vector3,
    { x: 551.4066162109375, y: 6504.2109375, z: 29.9033203125 - 1 } as alt.Vector3,
    { x: 551.3406372070312, y: 6497.67041015625, z: 29.86962890625 - 1 } as alt.Vector3,
    { x: 551.3274536132812, y: 6490.44384765625, z: 30.3077392578125 - 1 } as alt.Vector3,
    { x: 551.6439819335938, y: 6481.47705078125, z: 30.6783447265625 - 1 } as alt.Vector3,
    { x: 551.3802490234375, y: 6474.80419921875, z: 30.6278076171875 - 1 } as alt.Vector3,
    { x: 551.6043701171875, y: 6466.998046875, z: 30.6783447265625 - 1 } as alt.Vector3,
    { x: 551.5911865234375, y: 6458.8876953125, z: 30.7626953125 - 1 } as alt.Vector3,

    
    
    // { },
];


export const potatoPositions: alt.Vector3[] = [
    { x: 545.1692504882812, y: 6517.60888671875, z: 29.920166015625 - 1 } as alt.Vector3,
    { x: 545.090087890625, y: 6511.9912109375, z: 29.86962890625 - 1 } as alt.Vector3,
    { x: 545.076904296875, y: 6504.85693359375, z: 29.7685546875 - 1 } as alt.Vector3,
    { x: 545.090087890625, y: 6497.578125, z: 29.86962890625 - 1 } as alt.Vector3,
    { x: 545.1560668945312, y: 6491.05078125, z: 30.2740478515625 - 1 } as alt.Vector3,
    { x: 545.1956176757812, y: 6483.89013671875, z: 30.5267333984375 - 1 } as alt.Vector3,
    { x: 545.1296997070312, y: 6476.45263671875, z: 30.6446533203125 - 1 } as alt.Vector3,
    { x: 545.2747192382812, y: 6469.384765625, z: 30.6614990234375 - 1 } as alt.Vector3,
    { x: 545.3142700195312, y: 6463.89892578125, z: 30.5267333984375 - 1 } as alt.Vector3,
    { x: 545.3538208007812, y: 6458.42626953125, z: 30.6278076171875 - 1 } as alt.Vector3,

    
    
    // { },
];

export const pepperPositions: alt.Vector3[] = [
    // { },
    { x: 393.6263732910156, y: 6595.00244140625, z: 28.5047607421875 - 1 } as alt.Vector3,
    { x: 393.982421875, y: 6602.1494140625, z: 28.5047607421875 - 1 } as alt.Vector3,
    { x: 393.78460693359375, y: 6611.24853515625, z: 28.6732177734375 - 1 } as alt.Vector3,
    { x: 393.75823974609375, y: 6620.28125, z: 28.6732177734375 - 1 } as alt.Vector3,
    { x: 393.5472412109375, y: 6634.07470703125, z: 28.824951171875 - 1 } as alt.Vector3,
    { x: 393.8637390136719, y: 6642, z: 28.757568359375 - 1 } as alt.Vector3,
    { x: 393.79779052734375, y: 6647.98681640625, z: 28.80810546875 - 1 } as alt.Vector3,




];

export const grapePositions: alt.Vector3[] = [
    { x: -1909.6746826171875, y: 2107.60888671875, z: 130.934814453125 - 1 } as alt.Vector3,
    { x: -1899.072509765625, y: 2106.46142578125, z: 134.3890380859375 - 1 } as alt.Vector3,
    { x: -1890.5406494140625, y: 2106.11865234375, z: 136.4952392578125 - 1 } as alt.Vector3,
    { x: -1882.4835205078125, y: 2105.090087890625, z: 137.4893798828125 - 1 } as alt.Vector3,
    { x: -1873.6219482421875, y: 2104.523193359375, z: 137.4893798828125 - 1 } as alt.Vector3,
    { x: -1874.835205078125, y: 2100.421875, z: 138.786865234375 - 1 } as alt.Vector3,
    { x: -1881.9033203125, y: 2100.3955078125, z: 139.005859375 - 1 } as alt.Vector3,
    { x: -1889.89453125, y: 2101.213134765625, z: 138.24755859375 - 1 } as alt.Vector3,
    { x: -1901.89453125, y: 2102.38671875, z: 135.5347900390625 - 1 } as alt.Vector3,
    { x: -1910.4000244140625, y: 2103.164794921875, z: 132.855712890625 - 1 } as alt.Vector3,

    
    
    // { },
];





export const allRoutes = [miningPositions, woodPositions, tomatoPositions, orangePositions, saladPositions, potatoPositions, pepperPositions, grapePositions,  /*tomatoPositions*/];