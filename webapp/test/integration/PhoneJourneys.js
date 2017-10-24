jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"zsd/test/integration/NavigationJourneyPhone",
		"zsd/test/integration/NotFoundJourneyPhone",
		"zsd/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});