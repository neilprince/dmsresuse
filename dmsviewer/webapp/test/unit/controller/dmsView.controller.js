/*global QUnit*/

sap.ui.define([
	"ns/dmsviewer/controller/dmsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("dmsView Controller");

	QUnit.test("I should test the dmsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
