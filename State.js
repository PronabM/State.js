/*!
 * State.js v0.0.1
 * This Library is standalone, it has no dependency.
 * @license Copyright (c) 2017 Pronab Mukherjee, MIT License
 */

 class State
 {
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
 			eventList:{},
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
		 	// Appends property in the existing state (mutates the original state).
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
		 	// Sets/Retrieves the value associated with the property.
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
		 	},
		 	on:function(propt,handle)
		 	{
		 		var obj = this;
		 		this.eventList[propt]=handle;
		 		var f = function(){
		 			obj.off(propt);
		 		}
		 		return f;
		 	},
		 	off:function(propt)
		 	{
		 		this.eventList[propt]=false;
		 	}
		};
	    observer["core"]=obj;
	    return observer;
 	}
 }