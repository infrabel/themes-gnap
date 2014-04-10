module.exports = function(grunt) {
    grunt.registerTask('task-wildcard-target', 'Queues all tasks of a given type which targets which match the prefix', function (task, targetPrefix) {
        if (!task)
            return;

        if (!targetPrefix)
            return;

        var definedReplaces = Object.keys(grunt.config.data[task]);

        definedReplaces.forEach(function (definedReplace) {
            if (definedReplace.startsWith(targetPrefix))
                grunt.task.run(task + ':' + definedReplace);
        });
    });
};
