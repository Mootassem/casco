import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('planning');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const PlanningSchema = new Schema(
    {
      name: {
        type: String,
      },
      week: {
        type: Number,
      },
      year: {
        type: Number,
      },
      status: {
        type: String,
        enum: ['commited', 'cancelled', null],
      },
      demande: [FileSchema],
      stock: [FileSchema],
      product: [
        {
          id: String,
          quantityToProduce: Number,
          quantityRequested: Number,
          quantityInStock: Number,
          subassembly: Boolean,
          finishGood: Boolean,
          demanded: Boolean,
          perWeek: [
            {
              week: String,
              quantity: Number,
              quantityToProduce: Number,
            },
          ],
        },
      ],
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true,
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  PlanningSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  PlanningSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  PlanningSchema.set('toJSON', {
    getters: true,
  });

  PlanningSchema.set('toObject', {
    getters: true,
  });

  return database.model('planning', PlanningSchema);
};
