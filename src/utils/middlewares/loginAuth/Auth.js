const Auth = (role1, role2) => {
    return (req, res, next) => {
        if (!req.user.user)
            return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        if (req.user.user.role = role1)
            return next();
        
        if (req.user.user.role = role2)
            return next();
            
            return res.status(401).json({ status: 'error', error: 'Unauthorized' });
    }
}

export default Auth