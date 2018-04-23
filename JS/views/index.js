TestApp.Index = function(params) {
    var viewModel = {
        dSource: TestApp.db.sampleData.CategoryList.toDataSource()
    };
    return viewModel;
};