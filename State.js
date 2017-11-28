/*!
 * State.js v0.0.1
 * This Library is standalone, it has no dependency.
 * @license Copyright (c) 2017 Pronab Mukherjee, MIT License
 */

 class State{

 	"use strict";

 	var isLocked = false;

 	// Takes normal JS Object as function argument.
 	// Returns observable Object. 
 	static create(obj)
 	{

 	}

 	// Returns plain old JS Object.
 	getState()
 	{

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

 	lock()
 	{
 		if(!isLocked)
 			isLocked = true;
 	}

 	unlock()
 	{
 		if(isLocked)
 			isLocked = false;
 	}
 }