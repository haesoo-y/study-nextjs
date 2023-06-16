"use client";
import { styled } from "styled-components";

export const TodoListWrapper = styled.div`
  width: 360px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  & p {
    font-size: 16px;
  }
  & li {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  & a {
    color: #3535da;
  }
`;
