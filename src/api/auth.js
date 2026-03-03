
const STORAGE_USERS = "mock_users_db";
const STORAGE_TOKENS = "mock_tokens_db";

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_USERS)) || [];
    } catch (e) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

export function initializeUsers() {
    const users = getUsers();
    const adminExists = users.some((u) => u.email === "admin@ecom.local");

    if (!adminExists) {
        const adminUser = {
            id: "user_admin_001",
            name: "Administrator",
            email: "admin@ecom.local",
            password: "admin123",
            role: "admin",
            activated: true,
            createdAt: new Date().toISOString(),
        };
        users.push(adminUser);
        console.log("Admin user initialized: admin@ecom.local / admin123");
    }
    const clientExists = users.some((u) => u.email === "hamza@ecom.local");

    if (!clientExists) {
        const clientUser = {
            id: "user_client_001",
            name: "hamza",
            email: "hamza@ecom.local",
            password: "hamza123",
            role: "client",
            activated: true,
            createdAt: new Date().toISOString(),
        };
        users.push(clientUser);
        console.log("client user initialized: hamza@ecom.local / admin123");
    }
    saveUsers(users);

}

function delay(ms = 800) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login({ email, password }) {
  await delay(900);

  const users = getUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    throw {
      code: "INVALID_CREDENTIALS",
      message: "Email ou mot de passe incorrect.",
    };
  }

  if (user.password !== password) {
    throw {
      code: "INVALID_CREDENTIALS",
      message: "Email ou mot de passe incorrect.",
    };
  }

  if (!user.activated) {
    throw {
      code: "ACCOUNT_NOT_ACTIVATED",
      message: "Compte non activé. Vérifiez votre email.",
    };
  }

  // Generate auth token with role
  const authToken = generateToken();
  const tokens = getTokens();
  tokens[authToken] = {
    type: "auth",
    userId: user.id,
    email: user.email,
    role: user.role, // Include role in token
    createdAt: Date.now(),
    expiresIn: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  saveTokens(tokens);

  return {
    token: authToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role, // Include role in response
    },
  };
}

function saveTokens(tokens) {
  localStorage.setItem(STORAGE_TOKENS, JSON.stringify(tokens));
}

function generateToken() {
  return `token_${Math.random().toString(36).slice(2, 15)}_${Date.now()}`;
}

function getTokens() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_TOKENS)) || {};
  } catch (e) {
    return {};
  }
}

export async function verifyToken(token) {
  await delay(200);

  const tokens = getTokens();
  const tokenData = tokens[token];

  if (!tokenData || tokenData.type !== "auth") {
    return false;
  }

  // Check expiration
  if (Date.now() - tokenData.createdAt > tokenData.expiresIn) {
    delete tokens[token];
    saveTokens(tokens);
    return false;
  }

  return true;
}

export async function getCurrentUser(token) {
  await delay(300);

  const tokens = getTokens();
  const tokenData = tokens[token];

  if (!tokenData || tokenData.type !== "auth") {
    throw {
      code: "INVALID_TOKEN",
      message: "Token invalide.",
    };
  }

  const users = getUsers();
  const user = users.find((u) => u.id === tokenData.userId);

  if (!user) {
    throw {
      code: "USER_NOT_FOUND",
      message: "Utilisateur introuvable.",
    };
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role, // Include role in response
    },
  };
}
export async function logout(token) {
  await delay(200);

  const tokens = getTokens();
  if (tokens[token]) {
    delete tokens[token];
    saveTokens(tokens);
  }

  return { message: "Déconnecté avec succès." };
}
export default {
  login,
  verifyToken,
  getCurrentUser,
  logout,
};

