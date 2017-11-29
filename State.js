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
		 	},
		 	create:function(property,opt)
		 	{
		 		var ret = this["core"];
		 		if(opt!==undefined)
		 		{
		 			var props = property.split(".");
			 		for (var i=0,len=props.length;i<len-1;i++)
			 		{	
			 			if(!ret[props[i]])
			 				return false;
			 			ret = ret[props[i]];
			 		}
		 			ret[props[props.length-1]]=opt;
		 		}
		 		else
		 		{
		 			for(var propt in property)
		 			{
		 				ret[propt]=property[propt];	
		 			}
		 		}

		 	},
		 	prop:function(property,value)
		 	{
		 		var props = property.split(".");
		 		var ret = this["core"];
		 		for (var i=0,len=props.length;i<len-1;i++)
		 		{	
		 			if(!ret[props[i]])
		 				return false;
		 			ret = ret[props[i]];
		 		}
		 		if(value!==undefined)
		 		{
		 			if(!ret[props[props.length-1]])
		 				return false;
		 			ret[props[props.length-1]]=value;
		 		}
		 		else
		 			return ret[props[props.length-1]];
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