# Transform

2D 트랜스폼은 프로퍼티값으로 변환함수(transform function)를 사용함

| transform function    | 설명                                                         |     단위      |
| :-------------------- | :----------------------------------------------------------- | :-----------: |
| translate(x,y)        | 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다.       | px, %, em 등  |
| translateX(n)         | 요소의 위치를 X축으로 x만큼 이동시킨다.                      | px, %, em 등  |
| translateY(n)         | 요소의 위치를 Y축으로 y만큼 이동시킨다.                      | px, %, em 등  |
| scale(x,y)            | 요소의 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킨다. |   0과 양수    |
| scaleX(n)             | 요소의 크기를 X축으로 x배 확대 또는 축소 시킨다.             |   0과 양수    |
| scaleY(n)             | 요소의 크기를 Y축으로 y배 확대 또는 축소 시킨다.             |   0과 양수    |
| skew(x-angle,y-angle) | 요소를 X축으로 x 각도만큼, Y축으로 y 각도만큼 기울인다.      | +/- 각도(deg) |
| skewX(x-angle)        | 요소를 X축으로 x 각도만큼 기울인다.                          | +/- 각도(deg) |
| skewY(y-angle)        | 요소를 Y축으로 y 각도만큼 기울인다.                          | +/- 각도(deg) |
| rotate(angle)         | 요소를 angle만큼 회전시킨다.                                 | +/- 각도(deg) |

``` css
transform: translate(10px, 50px);
```

```css
transform: func1 func2 func3 ...;
/* 위와 같이 여러가지 속성을 쓸 수 있음 */
```

2D 트랜스폼은 X축과 Y축 좌표만을 이용하여 조정할 수 있음
3D 트랜스폼은 X축, Y축, Z축 좌표를 이용하여 조정함

![img](https://t1.daumcdn.net/cfile/tistory/2731983757BBFF230D)

| transform-origin            | 설명                                   | 개체 |
| --------------------------- | -------------------------------------- | ---- |
| backface-visibility         | 입체적인 뒷면의 가시성을 결정하는 속성 | 개체 |
| rotateZ(n)                  | Z축으로 회전                           | 개체 |
| rotate3d(x,y,z)             | 3축을 기준으로 회전                    | 개체 |
| scaleZ()                    | Z축을 따라 요소를 늘림                 | 개체 |
| perspective                 | 원근, 소실점, 투시도 법                | 부모 |
| skewZ()                     | skewZ()는 사실 Z축이 없으며 3D가 아님  | 개체 |
| perspective-origin          | 원근법에 대한 기준점을 설정            | 부모 |
| transform=style:preserve-3d | 요소의 자식이 3D 공간에 배치           | 부모 |
| transform-origin            | 회전을 시킬 축을 결정                  | 개체 |

