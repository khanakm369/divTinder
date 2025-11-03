// ✅ Admin Authorization Middleware
export const adminAuth = (req, res, next) => {
    console.log("🔐 Checking Admin Authorization...");

    // ✅ Normally token comes from headers
    // const token = req.headers["authorization"];
    
    const token = "xyz"; // Temporary hard-coded token

    // ✅ Verify token (for now just simple check)
    const isAdminAuthorized = token === "xyz";

    if (!isAdminAuthorized) {
        return res.status(401).json({
            success: false,
            message: "❌ Unauthorized request"
        });
    }

    console.log("✅ Admin Authorized");
    next();
};
