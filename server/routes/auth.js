const router = require("express").Router();
let User = require("../models/user");
const bcrypt = require("bcryptjs");
router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, password, cpassword } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            res.json({ error: "Email already exist" });
        } else {
            if (password === cpassword) {
                let hpassword = await bcrypt.hash(password, 12);
                let hcpassword = await bcrypt.hash(cpassword, 12);
                const newUser = await new User({ name, email, phone, password: hpassword, cpassword: hcpassword });
                await newUser.save()
                res.status(200).json({ message: "User Added" });
            } else {
                res.json({ error: "Password and cpassword must be same" });
            }
        }
    } catch (error) {
        res.send(error);
    }

})
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (!userExist) {
            res.send({ error: "Invalid credentials,SignUp first" });
        } else {
            const isMatch = await bcrypt.compare(password, userExist.password);
            if (isMatch) {
                res.status(200).send({ message: "Login Successful", userExist });
            } else {
                res.send({ error: "Invalid credentials" });
            }
        }

    } catch (error) {
        console.log(error)
    }

})

module.exports = router;