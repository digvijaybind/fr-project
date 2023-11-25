mod random_info;
use random_info;


struct Dougsdata{
	some_bool:bool,
	some_int:i32,
	some_float:f64,
	some_float2:bool,
	random:RandomInfo,
}


#[allow(unused_variables)] //this is that I don't get warning

fn main(){

let random_info_var=RandomInfo{
	some_bool:true,
	some_int:40,

};
	let mut dougs_var=Dougsdata{
		some_bool:true,
		some_int:80,
		some_float:10.3,
		some_float2:true
		random:RandomInfo{
			some_bool:true,
			some_int:90,
		},
	};
	dougs_var.some_float=100.00;

	let dougs_var_2=Dougsdata{
		some_int:200,
		..dougs_var
	};
}