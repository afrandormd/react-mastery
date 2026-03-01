export default function UserCard() {
    const user = {
        name: "Afrando Sharein Ramadhan",
        email: "rando@gmail.com",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=5",
        isOnline: true,
        joinedYear: 2022
    }

    const currentYear = new Date().getFullYear()
    const experienceYears = currentYear - user.joinedYear

    return (
        <div className="user-card">
            <img src={user.avatar} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p className="role">{user.role}</p>

            <div className="status">
                {user.isOnline && <span className="online"> 🟢 Online </span>}
            </div>

            <p className="experience">{experienceYears > 1 ? `${experienceYears} years experience` : "New Member"}</p>
        </div>
    )
}

