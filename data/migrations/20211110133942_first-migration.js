exports.up = (knex) => {
    return knex.schema
        .createTable('categories', function (table) {
            table.increments('id');
            table.string('categoryName', 128).notNullable();
            table.string('image', 128).notNullable();
        })
        .createTable('products', function (table) {
            table.increments('id');
            table.string('title', 128).notNullable();
            table.integer('categoryId', 128).notNullable();
            table.string('unitsInStock', 128).notNullable();
            table.string('unitPrice', 128).notNullable();
            table.string('img', 128).notNullable();
        });

    };

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('categories').dropTableIfExists('products');
};
