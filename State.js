/*!
 * State.js v0.0.1
 * This Library is standalone, it has no dependency.
 * @license Copyright (c) 2017 Pronab Mukherjee, MIT License
 */

 class State{

 	//"use strict"

 	

 	// Takes normal JS Object as function argument.
 	// Returns observable Object.
 	 

 	static create(obj)
 	{
 		// Handle special case if null or undefined is passed.
 		if (obj==null || typeof obj != "object")
 			return false;

 		var observer = {

 			isLocked:false,
 			lock:function()
			{
				if(!this.isLocked)
					this.isLocked = true;
			},
			unlock:function()
		 	{
		 		if(this.isLocked)
		 			this.isLocked = false;
		 	},
		 	// Returns plain old JS Object.
		 	getState:function()
		 	{
		 		return this["core"];
		 	}
		};
	    observer["core"]=obj;
	    return observer;
 	}

 	// Appends property in the existing state (mutates the original state).
 	// Appends at param position.
 	create(param,value)
 	{

 	}
 	// Appends at Base Position.
 	create(value)
 	{

 	}

 	// Retrieves the value associated with the property.
 	prop(param)
 	{

 	}
 	// Sets the value associated with the property.
 	prop(param,value)
 	{

 	}

 	on(param,handle)
 	{

 	}

 	next(param,handle)
 	{

 	}
 }