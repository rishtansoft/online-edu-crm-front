export const login = async (username, password) => {
    try {
      const response = await fetch('your_api_url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      const responseData = await response.json();
      localStorage.setItem('token',responseData.accessToken)
      localStorage.setItem('role',responseData.user_Role)
      return responseData.accessToken;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };
  