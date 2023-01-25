import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UsersAdmin() {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    const users = useSelector(state => state.users)

    return (
        <div>
            {users[0]?.isActive}
        </div>
    )
}
