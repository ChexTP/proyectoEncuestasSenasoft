export const ageRequired = (age) =>{
    return (req,res,next) =>{
        const { user } = req;
        if (!user) {
            return res.status(401).json({ message: "No user found" });
        }

        const currentDate = new Date()
        const birthDate = user.birthDate

        const diference = currentDate.getTime() - birthDate.getTime();

        // Convertir la diferencia de milisegundos a años
        const ageInYears = Math.floor(diference / (1000 * 60 * 60 * 24 * 365));


        if (ageInYears < 18) {
            return res.status(403).json({ message: "Forbidden: You don't have the right age" });
        }

        req.user=user

        next();
    }
}