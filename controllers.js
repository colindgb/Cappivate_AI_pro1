const db = require('./database');

exports.linkSocialMedia = async (req, res) => {
    try {
        const { userId, platform, profileUrl } = req.body;
        await db.query(
            "INSERT INTO linked_accounts (user_id, platform, profile_url) VALUES ($1, $2, $3)",
            [userId, platform, profileUrl]
        );
        res.json({ success: true, message: `\${platform} linked successfully!` });
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
};

exports.getLinkedAccounts = async (req, res) => {
    try {
        const userId = req.query.userId;
        const accounts = await db.query("SELECT * FROM linked_accounts WHERE user_id = $1", [userId]);
        res.json(accounts.rows);
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
};