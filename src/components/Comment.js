import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Container, Table } from "reactstrap";
import { getComments, selectComments, selectPost } from "../redux/commentSlice";

export default function Comment() {

	const dispatch = useDispatch();
	const post = useSelector(selectPost)	
	useEffect(() => {
		if (post)
			dispatch(getComments(post))
	}, [dispatch, post])

	const comments = useSelector(selectComments)

	return (
		<Container>
			<Table responsive hover size="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>NAME</th>
						<th>EMAIL</th>
						<th>BODY</th>						
					</tr>
				</thead>
				<tbody>
					{comments.map(x => {
						return (
							<tr key={x.id}>
								<td>{x.id}</td>
								<td>{x.name}</td>
								<td>{x.email}</td>
								<td>{x.body}</td>								
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}
