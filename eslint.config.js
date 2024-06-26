export default [
    {
        ignores: [
            "/app/adaptiveworks/",           // unignore `node_modules/` directory
            "node_modules/*",           // ignore its content
            "/app/components/"  // unignore `node_modules/mylibrary` directory
        ]
    }
];