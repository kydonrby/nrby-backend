import { User } from '../../../db/models';
import mongoose from 'mongoose';

const userMutations = {
  createUser: async (_, { user }, { loaders }) => {
    const newUser = new User(user);

    const savedUser = await newUser.save();
    return savedUser;
  },
  updateUser: async (_, { user }, { loaders }) => {
    const updatedUser = await User.findOneAndUpdate(
      {
        user_id: user.user_id
      },
      {
        $set: { ...user },
      },
      { new: true }
    );

    return updatedUser;
  }
};

export default userMutations;
