var farmbit_names = [
"Peter",
"Paul",
"Mary",
"John",
"George",
"Ringo",
"Yoko",
"Stevie",
"Saanvi",
"Nethra",
"Meha",
"Sidney",
"Lucy",
"Belden",
"Henry",
"Alejandro",
"Victor",
"Richard",
];

var nutrition_color = "#FF599D";
var cloud_color = "#155D67";
var sky_color = "#BBEDEA";

var board_w = 50;
var board_h = 50;
//var board_w = 30;
//var board_h = 30;

var n_lakes = 4;
var lake_size_min = floor(50*board_w*board_h/2500);
var lake_size_max = floor(100*board_w*board_h/2500);
//var n_lakes = 2;
//var lake_size_min = floor(80*board_w*board_h/2500);
//var lake_size_max = floor(120*board_w*board_h/2500);

var n_rock_deposits = 8;
//var n_rock_deposits = 4;
var rock_size_min = floor(20*board_w*board_h/2500);
var rock_size_max = floor(50*board_w*board_h/2500);

var n_forests = 2;
var forest_size_min = floor(100*board_w*board_h/2500);
var forest_size_max = floor(100*board_w*board_h/2500);

var farmbits_start_n = 0;

var max_fullness    = 14000;
var max_energy      = 10000;
var max_joy         = 10000;
var max_fulfillment = 10000;

//in order of priority
var fullness_desperate    = floor(0.015*max_fullness); //death
var energy_desperate      = floor(0.01 *max_energy); //sleep on spot
var joy_desperate         = floor(0.01 *max_joy); //refuse any other work
var fulfillment_desperate = floor(0.01 *max_fulfillment); //n/a
var fullness_motivated    = floor(0.2  *max_fullness);
var energy_motivated      = floor(0.2  *max_energy);
var joy_motivated         = floor(0.2  *max_joy);
var fulfillment_motivated = floor(0.2  *max_fulfillment);
var fullness_content      = floor(0.4  *max_fullness);
var energy_content        = floor(0.4  *max_energy);
var joy_content           = floor(0.4  *max_joy);
var fulfillment_content   = floor(0.4  *max_fulfillment);

//applies to farm
var nutrition_desperate = 10000;
var nutrition_motivated = 20000;
var nutrition_content = 50000;

var wait_t = 100;
var export_t = 1000;
var milkable_t = 1000;

var nutrition_max = 1000000;
var nutrition_percent = nutrition_max/100;
var presim_nutrition_flow_rate_mul = 200; //*%
var nutrition_flow_rate          = 0.000005; //*%
var watersrc_nutrition_flow_rate = 0.000008; //*%
var rain_nutrition_flow_rate     = 0.00001; //*%
var watersnk_nutrition_flow_rate = 0.00002; //*%
var poop_nutrition_leak = 1; //+v
var fertilizer_nutrition_leak = 20; //+v
var farm_nutrition_uptake_p = 0.002; //*%
var farm_nutrition_uptake_max = 80; //+v
var farm_nutrition_uptake_min = 1; //+v //difference created out of thin air!
var food_nutrition = nutrition_percent*5;
var farm_nutrition_req = food_nutrition*2;
var farm_nutrition_fertilize_threshhold = nutrition_percent*20;
var fertilizer_nutrition = farm_nutrition_req*2;
var water_fouled_threshhold = nutrition_percent*10;
var livestock_feed_req = 3;

var water_carryability = 0.2;
var food_carryability = 0.8;
var poop_carryability = 0.2;
var milk_carryability = 0.8;

var land_walkability      = 1;
var rock_walkability      = 0.7;
var grave_walkability     = 0.2;
var sign_walkability      = 0.5;
var water_walkability     = 0.5;
var shore_walkability     = 0.8;
var forest_walkability    = 0.6;
var home_walkability      = 0.9;
var farm_walkability      = 0.9;
var livestock_walkability = 0.8;
var road_walkability      = 4;
var export_walkability    = 1;

var sleep_energy          = floor(0.05*max_energy);
var plant_fulfillment     = floor(0.01*max_fulfillment);
var harvest_fulfillment   = floor(0.01*max_fulfillment);
var fertilize_fulfillment = floor(0.01*max_fulfillment);
var milking_fulfillment   = floor(0.01*max_fulfillment);
var feed_fulfillment      = floor(0.01*max_fulfillment);
var export_fulfillment    = floor(0.01*max_fulfillment);
var swim_joy              = floor(0.02*max_joy); //per frame

var max_dist = 9999999;

var home_cost = 1000;
var farm_cost = 150;
var livestock_cost = 200;
var fertilizer_cost = 200;
var food_cost = 200;
var sign_cost = 10;
var skimmer_cost = 500;
var road_cost = 500;
var free_money = 1000;

var money_start_n = 0;

var harvest_profit = 0;

var item_worth_food = 100;
var item_worth_poop = 10;
var item_worth_milk = 500;

var roads_per_buy = 10;

var debug_pathfinding = 0;
var debug_jobs = 0;

var particle_t = 100;
var clock_bounce_t = 50;

//'dot' refers to inspector nutrition bar dots
var nutrition_per_dot = nutrition_max/1000;
var dots_per_line = 50;

var nutrition_overlay_levels = 30;
var nutrition_overlay_frames = 2;
var nutrition_overlay_dots_per_level = 3;
var nutrition_overlay_ii = function(t){ return floor(t*nutrition_overlay_levels); }

var vignette_nutrition_overlay_levels = 60;
var vignette_nutrition_overlay_frames = 2;
var vignette_nutrition_overlay_dots_per_level = 3;
var vignette_nutrition_overlay_ii = function(t,f){ return floor(t*vignette_nutrition_overlay_levels)*vignette_nutrition_overlay_frames+f; }

//don't change
var land_topo_levels = 4;
var land_detail_levels = 3;
var land_frames = 2;
var land_off = function(topo,detail,frame){return topo*(land_detail_levels*land_frames)+(detail*land_frames)+frame;}
var livestock_fill_levels = 4;
var livestock_off = function(feed){return land_off(land_topo_levels,land_detail_levels,land_frames)+min(feed,livestock_fill_levels-1);}

