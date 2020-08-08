import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Photo from '../../components/photo'

const Item = styled.li`
  padding: 1rem;
  display: flex;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    .atom-photo {
      visibility: hidden;
    }

    .atom-check {
      visibility: visible;
    }
  }
`

const CheckColumn = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 22px;
  position: relative;
`
const InfoColumn = styled.div`
  flex: 1;
`

const DetailsColumn = styled.div`
  width: 100px;
`
const Check = styled.button<{ isChecked: boolean }>`
  width: 22px;
  height: 22px;
  border: 2px solid #333;
  border-radius: 2px;
  padding: 0;
  margin: 0;
  position: absolute;
  appearance: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  cursor: pointer;
  visibility: ${(props) => (props.isChecked ? 'visible' : 'hidden')};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.12);
  }

  ${(props) =>
    props.isChecked &&
    css`
      &::after,
      &::before {
        content: '';
        height: 2px;
        position: absolute;
        background-color: #333;
      }

      &::after {
        width: 6px;
        top: 11px;
        left: 2px;
        transform: rotate(40deg);
      }

      &::before {
        width: 14px;
        top: 8px;
        left: 4px;
        transform: rotate(-50deg);
      }
    `}
`

export default function MessageItem() {
  const [checked, setChecked] = useState(false)
  return (
    <Item>
      <CheckColumn>
        {!checked && (
          <Photo className="atom-photo" size={50} user={{ initials: 'JR' }} />
        )}
        <Check
          type="button"
          isChecked={checked}
          className="atom-check"
          onClick={() => setChecked(!checked)}
        />
      </CheckColumn>
      <InfoColumn>
        <h2>José Ronaldo</h2>
        <p>Boa tarde, como vai você?</p>
        <p>Caixa de entrada</p>
      </InfoColumn>
      <DetailsColumn>
        <time>Hoje, 11:42</time>
        <p>-2 horas</p>
        A, B, C
      </DetailsColumn>
    </Item>
  )
}
