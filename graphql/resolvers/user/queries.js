import { User } from '../../../db/models';

const userQueries = {
  users: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return await User.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);
  },
  user: async (_, { id }, { loaders }) => loaders.user.one(id),
};

export default userQueries;
