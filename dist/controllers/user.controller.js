import * as userService from "../services/user.service.js";
import { registerSchema, loginSchema, updateUserSchema, } from "../validators/user.validator.js";
export const registerUser = async (req, res) => {
    try {
        const validated = registerSchema.parse(req.body);
        const user = await userService.createUser(validated);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
export const loginUser = async (req, res) => {
    try {
        const validated = loginSchema.parse(req.body);
        const token = await userService.authenticateUser(validated);
        res.json({ token });
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
};
export const getMe = async (req, res) => {
    try {
        const user = await userService.getUserById(req.user.id);
        res.json(user);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
};
export const updateMe = async (req, res) => {
    try {
        const validated = updateUserSchema.parse(req.body);
        const updated = await userService.updateUser(req.user.id, validated);
        res.json(updated);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
export const deleteMe = async (req, res) => {
    try {
        await userService.deleteUser(req.user.id);
        res.status(204).send();
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};
//# sourceMappingURL=user.controller.js.map