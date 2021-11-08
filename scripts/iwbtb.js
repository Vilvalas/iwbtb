// initialises the user stats from the parameters, given by iwbtb.html, which got them from the database
function loadGame(level, deaths, shots, callback) {
	var playerJson = {
  "player_death":{"sx":0,"sy":0,"cols":16,"tilew":32,"tileh":32,"frames":16},
  "player_idle":{"sx":0,"sy":32,"cols":4,"tilew":32,"tileh":32,"frames":4},
  "player_walking":{"sx":128,"sy":32,"cols":4,"tilew":32,"tileh":32,"frames":4},
  "player_jumping":{"sx":256,"sy":32,"cols":2,"tilew":32,"tileh":32,"frames":2},
  "player_falling":{"sx":320,"sy":32,"cols":2,"tilew":32,"tileh":32,"frames":2}
};
	
	var level1Json = { "compressionlevel":-1,
 "height":19,
 "infinite":false,
 "layers":[
        {
         "data":[93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017],
         "height":19,
         "id":1,
         "name":"Background",
         "opacity":1,
         "properties":[
                {
                 "name":"boundingBox",
                 "type":"string",
                 "value":"true"
                }, 
                {
                 "name":"type",
                 "type":"string",
                 "value":"0"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 70, 71, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 120, 121, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 169, 170, 171, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 269, 270, 271, 272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 320, 321, 322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 70, 71, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 120, 121, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 169, 170, 171, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 70, 71, 72, 0, 0, 0, 0, 0, 269, 270, 271, 272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 119, 120, 121, 122, 0, 0, 0, 0, 0, 319, 320, 321, 322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 169, 170, 171, 172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 220, 221, 222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 269, 270, 271, 272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 319, 320, 321, 322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":19,
         "id":2,
         "name":"BackgroundObjects",
         "opacity":1,
         "properties":[
                {
                 "name":"type",
                 "type":"string",
                 "value":"0"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 40, 40, 40, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 39, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 39],
         "height":19,
         "id":3,
         "name":"Collision",
         "opacity":1,
         "properties":[
                {
                 "name":"collision",
                 "type":"string",
                 "value":"true"
                }],
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"Sprites",
         "objects":[
                {
                 "gid":5,
                 "height":32,
                 "id":329,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":544,
                 "y":448
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":330,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":448,
                 "y":352
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":331,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":384,
                 "y":320
                }, 
                {
                 "gid":1,
                 "height":32,
                 "id":332,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":32,
                 "y":576
                }, 
                {
                 "gid":2,
                 "height":32,
                 "id":333,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":32,
                 "y":224
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":335,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":320,
                 "y":464
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":336,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":352,
                 "y":448
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":337,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":376,
                 "y":472
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":338,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":608,
                 "y":336
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":339,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":656,
                 "y":344
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":340,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":344,
                 "y":488
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":341,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":640,
                 "y":312
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":349,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":160,
                 "y":112
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":350,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":184,
                 "y":96
                }, 
                {
                 "gid":65,
                 "height":24,
                 "id":351,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":21,
                 "x":216,
                 "y":112
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":352,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.7.2",
 "tileheight":32,
 "tilesets":[
        {
         "columns":4,
         "firstgid":1,
         "image":"..\/images\/tiled_objects.png",
         "imageheight":288,
         "imagewidth":128,
         "margin":0,
         "name":"objects",
         "spacing":0,
         "tilecount":36,
         "tileheight":32,
         "tiles":[
                {
                 "id":0,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Player"
                        }]
                }, 
                {
                 "id":1,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Warp"
                        }]
                }, 
                {
                 "id":2,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"InvisibleBlock"
                        }]
                }, 
                {
                 "id":4,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }]
                }, 
                {
                 "id":5,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"90"
                        }]
                }, 
                {
                 "id":6,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"270"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }]
                }, 
                {
                 "id":7,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"180"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }]
                }, 
                {
                 "id":8,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"FallingSpike"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"900"
                        }]
                }, 
                {
                 "id":9,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"FallingSpike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"90"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"900"
                        }]
                }, 
                {
                 "id":10,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"FallingSpike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"270"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"900"
                        }]
                }, 
                {
                 "id":11,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"FallingSpike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"180"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"900"
                        }]
                }, 
                {
                 "id":12,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"MovingSpike"
                        }, 
                        {
                         "name":"vx",
                         "type":"string",
                         "value":"300"
                        }]
                }, 
                {
                 "id":16,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"ShootingSpike"
                        }, 
                        {
                         "name":"direction",
                         "type":"string",
                         "value":"up"
                        }, 
                        {
                         "name":"firerate",
                         "type":"string",
                         "value":"2"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"100"
                        }]
                }, 
                {
                 "id":17,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"ShootingSpike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"90"
                        }, 
                        {
                         "name":"direction",
                         "type":"string",
                         "value":"right"
                        }, 
                        {
                         "name":"firerate",
                         "type":"string",
                         "value":"2"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"100"
                        }]
                }, 
                {
                 "id":18,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"ShootingSpike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"270"
                        }, 
                        {
                         "name":"direction",
                         "type":"string",
                         "value":"left"
                        }, 
                        {
                         "name":"firerate",
                         "type":"string",
                         "value":"2"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"100"
                        }]
                }, 
                {
                 "id":19,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"ShootingSpike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"180"
                        }, 
                        {
                         "name":"direction",
                         "type":"string",
                         "value":"down"
                        }, 
                        {
                         "name":"firerate",
                         "type":"string",
                         "value":"2"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }, 
                        {
                         "name":"speed",
                         "type":"string",
                         "value":"100"
                        }]
                }, 
                {
                 "id":24,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"scale",
                         "type":"string",
                         "value":"0.5"
                        }]
                }, 
                {
                 "id":25,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"90"
                        }, 
                        {
                         "name":"scale",
                         "type":"string",
                         "value":"0.5"
                        }]
                }, 
                {
                 "id":26,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"270"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }, 
                        {
                         "name":"scale",
                         "type":"string",
                         "value":"0.5"
                        }]
                }, 
                {
                 "id":27,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Spike"
                        }, 
                        {
                         "name":"angle",
                         "type":"string",
                         "value":"180"
                        }, 
                        {
                         "name":"flip",
                         "type":"string",
                         "value":"x"
                        }, 
                        {
                         "name":"scale",
                         "type":"string",
                         "value":"0.5"
                        }]
                }, 
                {
                 "id":28,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"ClonePlayer"
                        }]
                }, 
                {
                 "id":30,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"BossFruit"
                        }]
                }, 
                {
                 "id":32,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"FakeWarp"
                        }, 
                        {
                         "name":"warpX",
                         "type":"string",
                         "value":"400"
                        }, 
                        {
                         "name":"warpY",
                         "type":"string",
                         "value":"450"
                        }]
                }, 
                {
                 "id":33,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"FakeFakeWarp"
                        }, 
                        {
                         "name":"fakeWarpX",
                         "type":"string",
                         "value":"400"
                        }, 
                        {
                         "name":"fakeWarpY",
                         "type":"string",
                         "value":"450"
                        }, 
                        {
                         "name":"warpX",
                         "type":"string",
                         "value":"300"
                        }, 
                        {
                         "name":"warpY",
                         "type":"string",
                         "value":"450"
                        }]
                }],
         "tilewidth":32
        }, 
        {
         "columns":4,
         "firstgid":37,
         "image":"..\/images\/tiled_collision.png",
         "imageheight":224,
         "imagewidth":128,
         "margin":0,
         "name":"collisions",
         "spacing":0,
         "tilecount":28,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":3,
         "firstgid":65,
         "image":"..\/images\/tiled_fruit.png",
         "imageheight":24,
         "imagewidth":63,
         "margin":0,
         "name":"fruit",
         "spacing":0,
         "tilecount":3,
         "tileheight":24,
         "tiles":[
                {
                 "id":0,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"Fruit"
                        }]
                }, 
                {
                 "id":1,
                 "properties":[
                        {
                         "name":"Class",
                         "type":"string",
                         "value":"MovingFruit"
                        }, 
                        {
                         "name":"speedX",
                         "type":"string",
                         "value":"0"
                        }, 
                        {
                         "name":"speedY",
                         "type":"string",
                         "value":"0"
                        }]
                }],
         "tilewidth":21
        }, 
        {
         "columns":50,
         "firstgid":68,
         "image":"..\/images\/tiled_backgrounds.png",
         "imageheight":2432,
         "imagewidth":1600,
         "margin":0,
         "name":"background",
         "spacing":0,
         "tilecount":3800,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.6",
 "width":25
}
	
    // development mode - external files don't get cached
    var Q = window.Q = new Quintus({development: false})
        .include("Scenes, Sprites, Anim, 2D, Input, UI, TMX, Audio")
        // include game modules over javascript files
        .include("Animation")
        .include("Player")
        .include("Spike")
        .include("Fruit")
        .include("Bullet")
        .include("Warp")
        .include("InvisibleBlock")
        .include("Boss")
        .include("GameOver")
        // give Quintus the gameCanvas we defined in iwbtb.html, and let it work with it
        // Quintus takes the width and height automatically from the canvas element
        .setup("gameCanvas");

    // set keyboard controls (multiple options for personal preference)
    // A | Shift: jump
    // S | Y | Space: shoot
    // R: restart level
    // ESC: go back to mainMenu
    Q.input.keyboardControls({
        LEFT: 'left', RIGHT: 'right',
        A: 'up',
        SHIFT: 'up',
        S: 'fire',
        Y: 'fire',
        SPACE: 'fire',
        R: 'esc',
        ESC: 'confirm'
    });

    Q.enableSound();
    // images will get scaled as they are, without smoothing the edges
    // normally we would call Q.setImageSmoothing(false), but we get a nice error message:
    // 'CanvasRenderingContext2D.webkitImageSmoothingEnabled' is deprecated. Please use 'CanvasRenderingContext2D.imageSmoothingEnabled' instead.
    // --> we have to change the settings ourselves, instead of calling the Quintus function
    Q.ctx.mozImageSmoothingEnabled = false;
    Q.ctx.imageSmoothingEnabled = false;
    Q.ctx.msImageSmoothingEnabled = false;
    Q.ctx.imageSmoothingEnabled = false;

    // define sprite type and collision mask constants
    // used in sprite classes for collision detection
    Q.SPRITE_NONE = 0;
    Q.SPRITE_MAP = 1;
    Q.SPRITE_PLAYER = 2;
    Q.SPRITE_HAZARD = 4;
    Q.SPRITE_BULLET = 8;
    Q.SPRITE_BOSS = 16;
    Q.SPRITE_UI = 32;
    Q.SPRITE_ALL = 0xFFFF;

    // initialize the quintus user stats
    Q.state.set({level: level});
    Q.state.set({deaths: deaths});
    Q.state.set({shots: shots});

    // load game files
	// Level images
	Q.load("tiled_objects_TEST.png",null,{nameOverwrite: 'tiled_objects.png'});
	Q.load("tiled_collision.png");
	Q.load("tiled_backgrounds.png");
	Q.load("tiled_fruit.png");
	// sprites
	Q.load("player_TEST.png",null,{nameOverwrite: 'player.png'});
	
    Q.load(
        "hdSpikes.png, hdSpikes.json, fruit.png, fruit.json, utility.png, utility.json, " +
        "boss1.png, boss1.json, boss2.png, boss2.json, gameover.png, gameover.json, " +
        // sounds + music
        "jump.mp3, doubleJump.mp3, shoot.mp3, fall.mp3, blockChange.mp3, bossHit.mp3, death.mp3, boss2_intro.mp3, boss2_death.mp3, boss2_teleport.mp3, " +
        "stage1.mp3, stage2.mp3, stage3.mp3, boss1.mp3, boss2.mp3, credits.mp3", function () {
            // Quintus takes the separate pictures from the png according to the json-file
            // the next line alone creates the sprite sheets player_death, player_idle, player_walking, player_jumping and player_falling
            Q.compileSheets("player.png", playerJson);
            Q.compileSheets("hdSpikes.png", "hdSpikes.json");
            Q.compileSheets("fruit.png", "fruit.json");
            Q.compileSheets("utility.png", "utility.json");
            Q.compileSheets("boss1.png", "boss1.json");
            Q.compileSheets("boss2.png", "boss2.json");
            Q.compileSheets("gameover.png", "gameover.json");
            // tell iwbtb.html, that the game has fully loaded
            callback();
        });

    // called by Q.stageScene("level");
    // define scene and load the appropriate level from .tmx file
    Q.scene("level", function (stage) {
        // get the current level, which has to be staged
        var currentLevel = Q.state.get("level");
        // the bullet objects get destroyed by staging a level, so we can set the active bullet counter to 0
        Q.state.set({bullets: 0});
		
        Q.stageJSON(level1Json, stage);
		// Q.stageTMX("level1.tmx", stage);
		// Q.stageTMX("level" + currentLevel + ".tmx", stage);
		
        // music is supposed to keep playing for specific stages in a row
        // only reset music if a stage with new music is reached (checked in warp.js), or if a boss stopped the music on death
        if (Q.state.get("keepAudio") != true) {
            // everything (sounds and music) will stop playing
            Q.audio.stop();
            // check for stage numbers and play the according music
            if (currentLevel <= 14) {
                Q.audio.play("stage1.mp3", {loop: true});
            } else if (currentLevel == 15) {
                Q.audio.play("boss1.mp3", {loop: true});
            } else if (currentLevel <= 24) {
                Q.audio.play("stage2.mp3", {loop: true});
            } else if (currentLevel <= 28) {
                Q.audio.play("stage3.mp3", {loop: true});
            } else if (currentLevel == 29) {
                Q.audio.play("boss2.mp3", {loop: true});
            } else {
                Q.audio.play("credits.mp3", {loop: true});
            }
            Q.state.set({keepAudio: true});
        }

    });
}

function startGame() {
    // initialize the first / current level
    Q.stageScene("level");
}