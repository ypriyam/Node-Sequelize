module.exports = (sequelize: any, DataTypes: any) => {
    const ToDo = sequelize.define("todo", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });

    return ToDo;
}