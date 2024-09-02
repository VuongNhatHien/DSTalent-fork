module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "test",
    {
      test_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question_file_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      answer_file_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      problem_phase: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      duration: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      up_level_request_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
    },
    {
      tableName: "test",
    },
    {
      timestamps: true,
      createdAt: "created_at", // Alias createdAt as created_at
      updatedAt: "updated_at", // Alias updatedAt as updated_at
    }
  );

  return Test;
};
