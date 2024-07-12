export const genderRequired = (gender) =>{
    return (req,res,next) =>{
        const { user } = req;
        if (!user) {
            return res.status(401).json({ message: "No user found" });
        }

        if (user.gender == 'Hombre') {
            return res.status(403).json({ message: "Forbidden: You don't have the right gender" });
        }

        req.user=user

        next();
    }
}