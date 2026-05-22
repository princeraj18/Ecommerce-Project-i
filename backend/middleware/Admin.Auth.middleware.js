export const adminOnly = (req, res, next) => {
  try {

    // check authentication
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated",
      });
    }

    // check admin role
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access only",
      });
    }

    next();

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};