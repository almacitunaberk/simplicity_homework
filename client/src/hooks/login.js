import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      token
    }
  }
`;

export const useLogin = (email, password) => {
  const { data, error, loading } = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });
  return {
    data,
    error,
    loading,
  };
};
