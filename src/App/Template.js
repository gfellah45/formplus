import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Container from "../components/Container";
import Count from "../components/Count";
import Heading from "../components/Heading";
import Notification from "../components/Notification";
import { useSelector, useDispatch } from "react-redux";
import { fetchTemplates } from "../redux/template";
import { isEmpty } from "../utility/isEmpty";
import { paginate } from "../utility/paginate";
const Template = () => {
  const dispatch = useDispatch();
  const {
    templates: { list, filterd },
  } = useSelector((state) => state);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(12);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  useEffect(() => {
    !isEmpty(filterd) && setData(filterd);
  }, [filterd]);

  return (
    <Container>
      <Heading search={search} setSearch={setSearch} />
      <Notification />
      <Count filterd={filterd} />
      <CardList
        data={paginate(data, count, page, search)}
        setPage={setPage}
        page={page}
        setCount={setCount}
        search={search}
      />
    </Container>
  );
};

export default Template;
