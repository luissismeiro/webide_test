jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderHeaderSet in the list
// * All 3 SalesOrderHeaderSet have at least one SalesOrderItemData

sap.ui.require([
	"sap/ui/test/Opa5",
	"zsd/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsd/test/integration/pages/App",
	"zsd/test/integration/pages/Browser",
	"zsd/test/integration/pages/Master",
	"zsd/test/integration/pages/Detail",
	"zsd/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsd.view."
	});

	sap.ui.require([
		"zsd/test/integration/MasterJourney",
		"zsd/test/integration/NavigationJourney",
		"zsd/test/integration/NotFoundJourney",
		"zsd/test/integration/BusyJourney",
		"zsd/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});