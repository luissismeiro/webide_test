sap.ui.define([
		"zsd/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Netwr").length, 1, "The sorting by Netwr returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Bstnk").length, 1, "The sorting by Bstnk returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Netwr").length, 1, "The group by Netwr returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Netwr if the user groupes by Netwr", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Netwr");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Netwr", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Bstnk and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Netwr");

		this.oGroupSortState.sort("Bstnk");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});