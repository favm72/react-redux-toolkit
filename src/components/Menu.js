import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Container, Table } from "reactstrap"
import { getPosts, selectPosts } from "../redux/postSlice"
import { setPost } from "../redux/commentSlice"
import { useHistory } from "react-router-dom";

export default function Menu() {
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	const posts = useSelector(selectPosts)

	return (
		<Container>
			<Table responsive hover size="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>TITLE</th>
						<th>BODY</th>
						<th>COMMENTS</th>
					</tr>
				</thead>
				<tbody>
					{posts.map(x => {
						return (
							<tr key={x.id}>
								<td>{x.id}</td>
								<td>{x.title}</td>
								<td>{x.body}</td>
								<td><Button onClick={()=>{									
									dispatch(setPost(x))
									history.push("/comments")						
								}}>View</Button></td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}
