import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useParams } from 'react-router-dom'

import Photo from '../../components/photo'
import useStore from '../../store/use-store'
import { useFetchMessages, useArchiveMessageListIds } from '../../actions/message'

const Item = styled.li`
  padding: 1rem;
  display: flex;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    & > *:first-child .atom-photo {
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

const UserGroup = styled.div`
  display: flex;
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

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export default function MessageItem() {
  const {
    store: { message },
  } = useStore()
  const { id } = useParams()
  const fetchMessages = useFetchMessages()
  const archiveMessageListIds = useArchiveMessageListIds()

  useEffect(() => {
    fetchMessages({ id })
  }, [fetchMessages, id])

  const isItemChecked = (item: string) => message.archiveByIds.includes(item)

  const handleCheck = (item: string) => {
    console.log(isItemChecked(item), [...message.archiveByIds, item])
    if (isItemChecked(item)) {
      archiveMessageListIds(message.archiveByIds.filter((val: string) => val !== item))
    } else {
      archiveMessageListIds([...message.archiveByIds, item])
    }
  }

  return (
    <MessageList>
      {message.selected?.subMenuItems.map((item: any) => (
        <Item key={item.id}>
          <CheckColumn>
            {!isItemChecked(item.id) && (
              <Photo
                className="atom-photo"
                size={50}
                user={{ initials: item.owner }}
              />
            )}
            <Check
              type="button"
              isChecked={isItemChecked(item.id)}
              className="atom-check"
              onClick={() => handleCheck(item.id)}
            />
          </CheckColumn>
          <InfoColumn>
            <h2>{item.name}</h2>
            <p>{item.subject}</p>
            <p>Caixa de entrada</p>
          </InfoColumn>
          <DetailsColumn>
            <time>Hoje, 11:42</time>
            <p>-2 horas</p>
            <UserGroup>
              {item.users.map((user: string) => (
                <Photo
                  key={user}
                  className="atom-photo"
                  size={20}
                  user={{ initials: user }}
                />
              ))}
            </UserGroup>
          </DetailsColumn>
        </Item>
      ))}
    </MessageList>
  )
}
