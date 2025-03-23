import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Dummy auth logic (replace with real logic later)
        if (credentials?.username === 'user' && credentials?.password === 'pass') {
          return { id: '1', name: 'User', email: 'user@example.com' };
        }
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);