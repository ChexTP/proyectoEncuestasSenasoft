export const rolRequired = (role) => {
    return (req, res, next) => {
        const { user } = req;
        if (!user) {
            return res.status(401).json({ message: "No user found" });
        }

        if (user.role !== role) {
            return res.status(403).json({ message: "Forbidden: You don't have the right role" });
        }

        req.user=user

        next();
    };
};
