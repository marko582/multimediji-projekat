import * as authService from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await authService.loginUser(req.body);

    res.json({
      message: 'Login successful',
      user
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};