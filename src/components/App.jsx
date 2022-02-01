import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      // 1단계, 전개 연산자 사용
      // setForm({
      //   ...form,
      //   [name]: value,
      // });

      // 2단계, produce의 인자로 (변경할 상태, 상태 업데이트 함수) 전달
      // setForm(
      //   produce(form, (draft) => {
      //     draft[name] = value;
      //   }),
      // );

      // 3단계, 첫 번째 인자로 함수 전달 => 업데이트 함수 반환
      setForm(
        produce((draft) => {
          draft[name] = value;
        }),
      );
    },
    [form],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // 1단계, 전개 연산자 사용
      // setData({
      //   ...data,
      //   array: data.array.concat(info),
      // });

      // 2단계, produce의 인자로 (변경할 상태, 상태 업데이트 함수) 전달
      // setData(
      //   produce(data, (draft) => {
      //     draft.array.push(info);
      //   }),
      // );

      // 3단계, 첫 번째 인자로 함수 전달 => 업데이트 함수 반환
      setData(
        produce((draft) => {
          draft.array.push(info);
        }),
      );

      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [data, form.name, form.username],
  );

  const onRemove = useCallback(
    (id) => {
      // 1단계, 전개 연산자 사용
      // setData({
      //   ...data,
      //   array: data.array.filter((info) => info.id !== id),
      // });

      // 2단계, produce의 인자로 (변경할 상태, 상태 업데이트 함수) 전달
      // setData(
      //   produce(data, (draft) => {
      //     draft.array.splice(
      //       draft.array.findIndex((info) => info.id === id),
      //       1,
      //     );
      //   }),
      // );

      // 3단계, 첫 번째 인자로 함수 전달 => 업데이트 함수 반환
      setData(
        produce((draft) => {
          draft.array.splice(draft.array.findIndex((info) => info.id === id));
        }),
      );
    },
    [data],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
