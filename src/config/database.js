module.exports = {
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "task-db",
    define: {
        timesTamp: true, // Cria duas colunas createdat e updatedAt
        underscored: true, // nomeclatura underline ao invés de camel-case
        underscoredAll: true // mesma explicação, só que para chave estrangeira e etc.
    }
}
