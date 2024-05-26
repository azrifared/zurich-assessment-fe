"use client";
import React, { useEffect, useMemo, useState } from "react";
import {useSession} from "next-auth/react";
import { useRouter } from "next/navigation";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function AuthGuard({children}: { children: React.ReactNode }) {
	const [backdrop, setBackdrop] = useState(false);
	const { status }: any = useSession();
	const isLoading = useMemo(() => status === "loading", [status]);
	const isAuthenticated = useMemo(() => status === "authenticated", [status]);
	const router = useRouter();
	const loginRoutes = "/login"

	useEffect(() => {
		setBackdrop(true)
		if (isLoading) return
		if (!isAuthenticated) router.push(loginRoutes)
		setBackdrop(false)
	}, [isAuthenticated, isLoading])

	return (backdrop 
		? (
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={status === 'loading'}
			>
				<CircularProgress color="inherit" />
			</Backdrop>	
		)
		: children);
};