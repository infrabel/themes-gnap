jQuery(function ($) {
    // Used for code highlighting
    if (typeof hljs !== 'undefined')
        hljs.initHighlightingOnLoad();

    $('#tree1').ace_tree({
        dataSource: treeDataSource,
    });
        dataSource: treeDataSource2,
    });

    /**
});