import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './LeftMenu.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class LeftMenu extends Component {

    state = {
        profileImg : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUXGBYYGBcYGBgaGBgaGBgXFxgZFhoaHSggGBomHRcXITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS8tMC0tLS0tLS0tLS0tLS0tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABAMFAgYHAQj/xABDEAACAQIEAwQGBggHAAIDAAABAhEAAwQSITEFQVEGImFxEzKBkaGxQlOiwdHSBxQWUmKS4fAVI0NygqPxVJNEssL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQACAgIDAAIBAwMFAAAAAAAAAQIREiEDMVETQQQiMmFxkaFCgbHB8P/aAAwDAQACEQMRAD8A4bRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBILDHlWX6s3T5VeJhEfvW216HcfjSl+0yggioUxuLRW/q7dPiK9GFcmI18xTnID4z4/H+tS4cjXw/vSqsjIrzhHiY08xWIw7dPlV/hkBtsDqcsj2a0g1sjkaVj3ViH6s3T4ipsPwu65hVk+Y+800tWPD2yuD7/ACNOwTsWt9j8Y21kH/nb/NUw7C48/wCh/wBlv81dH4O+lbFZqnRqoWcYHYHiH/x/+y3+ag9guID/APH/AOy3+auz3HysPL796mbQn7vcI86myvjRxE9g8f8AUf8AZb/NUb9isaN7P27f5q7mVBpHG2hFMXxnFG7KYsb2vtp+avD2Vxf1X20/NXUsTvNYos/fQxKCs5iOyWLP+l9tPzV7+yGM+q+2n5q6sqAb1izjxqMmX8aOWHsfjPqft2/zVj+yWL+qH89v81dPa+ux086gv3+lJyY1xROZ3ezGKXe1H/NPzVGvZ7EHa39pfxrol1pGuoqPD2xH9zTUiJcdGhjsxivqvtJ+NZfsri/qvtp+auk2bNZ5KHMSgcxPZjFfVfaT8aifgGIG9v7Sn766TiWiBI1qqxl5xoGI73qgmJ5ED76l8hXxGgtgnG6/EfjXqcPuEwF16SPDx8au8Vox9vwqB7hVf4jIB8Ofy+NNzf0ZVvZTPYYGCNvEVibZpo1GTV2RkRjDNE5THWhsOw5cp5VZW7eUEbypM+2sLigwSeSx/WlkN6dCBw7aGN68Fk9Kad9Pd99S2kA5+c+Qosa2yvFs/wBmvfQnpTSYUsYH9+Mb/KrKzgAvrancAan+ns99JzSHGLZTJhHOyk/P3VKeG3f3fiPxqwOLOsKbaLuY7x6DX6Rp7hbZ0zHqf6UnNpWWopuiBL7FwwMJlchQIClVMqQOYPXwqSziGYA5Q6HedCh569OYpTD8bO1xQ459do9uhNTZxcMC7KkRkMKV6FQNCQYqWvStroL2BR9UYHfTy3896VW0VDSNRPyqSzhindusEUnQzrIMBlHTxMb1NexTZI1HeZSGgkhYkNpHOmmzOSTVvRA2yxvXquctTZBcUFRlI0id4A1GnjXlm2QII5f+07JimiAJVlhrOvurC3a5dasLCeFMaRtXA27g91bNYatV4OY0rY7NymjZE1+wzMsFR/uIA67mmLSZZmCeo92nKl32qW0adFWTzSOPOlMO9JYm5pTEVt1ZHtqFRzFNBZA9tY+iihMTREHqO7eqS4KguJRSFk0V+Luk/Gq7D4kqYJ7vyp/ErpVZiRBj3/3/AHvTxRGTux1XgxyPzqW08aeNJK0qp56fDSp8+UknqPlWVUzW7Rb2rtevfA51Vi+TXl0TScRJsdW7DZgQdxHUERSmK4LdNpr1pSbanvHOCVmJJPsBO0GdIglO+SKrMTiQTDD21jNeG3HOuxLE6tpsSaSxRmfDQeymydj4UjcaN60SOSTti+QkE6aAH7tK8y6eOsjptH3+6pmtkDwI/sVgQeX9a0siifCtoQdwD92nv+dR3CYWOg++peHWszHYAAySVUcubECZ5TU1q3byxJYruAN9yMpnX3fjSboSi5MSRC2w1MVYWMIoMMdTy58h7OX41Df4hlAAUCdxrMcpI1BO/hp1qSxaUuqo0MGVnVt9CDAaIOXXfnSds1ikujPMz6WsoT6RXVwB1B1nkN6q2LXLkDQ7AE+qB1PxJ86sMRh1t6G6F1zHLq5PIDoB8yajvcZ/cXWIztBcjxMUR/gbV9k+a40CFNpdJu/S6trr5VJa4lZtDKsxvpJE84mqK/iGcyzE1FVYX2PKiQVmwj3D5V6Lx8KAZ3360xZJjFnHuBlJDL+6wkfGrJ2W8ikFVInu97U6DePAVTBfEU5h17ntHzpNImTHrWFKjvgwdgOR5Etso5UzhnLDvAQDBnSOkfKPKq4uyvoSNqssNigSM6z4jT4beNQ0VHrQ7YwonQ6jkaYs2yImiyoaMrCBJ3gxuZnnv7+VT4bGW27odWjlOtNOiqQ9gnj31d4a9Wr3ceiaE5deYimcFxq2T61UhWbgG0rK2arcPigRoZFSemqrLGbtzeln1UVHduUd7TQZdNdZpNlxi5dHqivXrFGr1m1polkVy3UT26aLSQBqSYAqDE2XGaYMRMMrZZ2zZSYoTJcSuxNrnzqixiQ2lbDfuStU2LHOnF7JklRCmwA2ounT2j5GvLGw/vmaxxR09o+RpPsq/wBJKXj3CsxPWlLh+Q+dMW30HlUSGkRXyetVl61Op609i31FLXD3fb+NZ0NvRX3OXtpVl1pm7uBRZsiROp8PvPKr6OZJti3oyYy+75z1r30Sj1jynKOQ8TTRaCFjukTKg+wAfS1I99YYju913EGCcpOYGAO6BtrJgxvU22a0uyHEMcgAACt6pHOOp6+Hga8wNkMGkgAZTqYGk6Ty5V6uPXMQEkNoc5J0GoEDTl4moMXiXZIJ7smByHlVpOqIdZJsmuYy2DmeLtwGZAygeZ+lHLSlHx7kQsIvRdPedzSjCs1GmvOqxSHZiTRFZ5B1rE3OlMbMctZZPGvDdNYTT2TaG2AqI1jWQpGRktX/AARLJEX2uKsaFACQ0iMwO677a1r4q84UiARdzdAQV7p5Eg7jrrUT6NOOLb0GMRBcYIxZQe60Zcw5EqdvKpLI6VC41qDF4woBA1NJIeRY48f5cTEkDTz1pDh9sKyxuWUA+3esUuMyhySTBMcugqFMa1shljNrGgMe+lt6NdRVtGwcUSzcZ1JZWCzO4JGsGdhHT+tUeCw9wLnU/wDHn7KuWx4uqSwRXK6ZUVTMRrGhprs5ZdwZQaAnly33qXyNG0fx4ye/Cy7MpNtXcd4mQZO07EVsq3ECksxB8pHzn4VT4UqAACugmJEx5U8bbAAlGAOxIIB8jzrQySrSGbtxQO6ST5QB4+NK2sUxMyd5+7bpWV9zkJjTr7YpS2+ulNdFU6Zarr4Hp18vwqO6dazJ7onpPxNe4fFWVY+nYhdANMzT4Dn7aUXq2JJvRAl3KwMTr8eVa9ZVgcpnMja+wEGTz5irbHcQtm5Fi6RkzFQ6RmYR658dhHSqbiHGzkRntDMLgbTQEie60bjelKtG6qCdj6XJEUpfFSPiQyK+udhmIkEaxoOYAmAKgutIqoTUnaMeTjx0QoNB7fmagxZ016j5GmyO6Pb8zSmPQ5c0GJGsac+dN9kfRjGbboPnWWw3+dY4Z9fYPvqZgILEHlz8/wCnvrNvZaWhPEnaoHPd9tNXQp1mANTPTzA+6lbHFLADBlYgnqswDMarmU+II6UNOuiG0u2KupOUCawa6q7axE/xR18J5e2nLty0yA2mIGuZSJKhj1A1Gw/9qoY6ULZl+0d9Fda3nDJbV2IVcxDXCNDl3JA0EkgchVNl1qyu2VIUs0DLoACSfCJ28fOoBkYkuSBsI5dPOqT8G0/sjwGFdnAVSx10AJOx5CnX4XcNlboSUa4banMurz6sTI33iPGscBxW9bVbaXGVVcuApghiuQmRrqpIiY1NYLazws+sTy21P4fGk3IluOhXiGEuWbjWrq5XQwyyDB33Uke40mTT+J4eUUOSCCzrtGqkg0miTpWiJb2YCsTUt22VqKqAKKKKAJ7SzvsBWTgATWKnSiKn7ETOo+jPmatsBhnbvGMubKDEa5SwYgbAxVGjVdpxXKhC7dPGImpn9aL4unbJLmHYMQdKqeIjbzin0xhaYG0VXcRuSQsarM+3lSinlspuFaGLGKUWss6xHlSzKImQY5Tv1qECvLlNR2S+RypMskvKrAgETyOsDlrzrcOEYxAgPI6PqJHiPbBrSrKTEiQPgJp6y+WYJjSuecbPR4p46LTGYTOCUYZySSJOv+321tvCbl1LTxnuNkVRbMkM2URpzEztrpWpXLUhXVjmEVY4zi964BbtMyIMvdUwS0ROmp1J0mnHkpbFOCT0jyzcZWa5cLelJYHUgCJGWB9H6MbVvmBxFvEC5aYJZJg+kIgGTOp8ga0S/jrkj0uRmRcglZbXnI1Yjx6CrrBY63Ho7BKh1JfNMllykEzpHrH2bVl8ju0UoqsTY8HhsK2j3yAO6CF7u8SSfE7eIqk47hvRXXtkhoIgjYggFSPYRT9jBu6BEEm2WDAaTrlcb66gD2Vn27wC2rqMplXRdOa5QFidiNq6uO+mY8iUf2nLOIX3zsZPrEeUGAPgKurCm5gHLbqZB8j/AOine0vCrdrCpce3F687Fe9H+WFXvFR1JO8b1rjcYYWDZCgA6E67eA5GlyRbqvTFfovJ9oYwR7o/vnW2di+ErisQtl3yrBJPMgcl8a0/hBzLHQ10b9HnD1R3xF2AUy+iDcy2pcA+tCjy73hVt0i3cpadm1cZtYBMO+SwjGyoAbmcoMEx6253rlHFu0NpiBdVjK/QhcqkkhR8J92u9dTXCBLubUpJIBgk6zB5VzXj3ZxXu3vRI2md+UhZkkwI5/Gso8n0zuUFCFRX9yowuH9KrPYDsqxnEDMknQmNxp6w6axTnDMEb163Zn13VP5jE+MTNQdnby2kdZdWaAcv0gDPf12npTeMvPZcOoK3UYHUbRrt7qM7Zzy4045L+w12twdzI+HtKMi7ZUAIyMDmzDvEnxmZrn1vhdxgCF393t8a63iO0WH9Ct0ZS7AG4g9YGJIA8/hWtcEwpxDpYRwhuBiCRIXKhfXUSBETp5UlOaVUN8HHyyteXr+DUOCBgzAJmJDKRB0kRMjxI05wKzu2CJB0I5U7ZwJs3MrE5vWzA6GdQQRyqwPE8uhZh/uG/v5eNEuSn0ZR/Htd0UeIAKKRyEFQN4IAMz5fGkrbbzz0rardtLrFsoBjcCAR4jY6iqTGYAK0ltDrA5Dl/flRGV2Yc3FKG+yIEadYj5VFJAB6E/M17aSWAX3n51I6DWDI1/vwq4+GTTaslxeHIwysZP8Amv16MfuqrwQ7/vq84g5bCifrgfDW3cJiqTCmG99WumJ/R5jht7fupUrTeNNKGqj0D7LPs8mHN0DEuUtw0sFLQcrZe6NT3so9tL8VNr0rehP+X3cukfRE6HxmlBWNOt2O9UMt6oFZnTcU1gbUNmB220P3ijit/OQSSSNNfw5VGW6G4UshAVnaMGvMpiYMbTyneKxIqzItcUTayXUEBkgxtmiCfdB99VM8zv1pl8UfRC1ynMfPYVDassxhQSegodDVvRjOu1TQC3egDSAPKm14HdIkAHwnX46Uth7GpDDUaEHlUNprRtGEk1aG8Ll/vz5+FM3FAQSVGu3OPd/c1V3beVtDvtThssYObllPl4Vk0vTqUr+h3DY8BhbGvj+FXmHDRmQwwMz03GpHnWvvbV9QoVx00DfgfH/2mcHxFwjKCc0HSOXMjoRHwrKcbWjWM2tS/wBi1v4VgsOVY3IQN9FAcpluhgab7Hoa2yxhMPZs27haVtSW0H+YSpEMOQkiB4Ctb4RxtL4TD3kRWgKLo0DR6ovLs3LviCIG9e9oLd1SEN0NbUzl7quI1hgD3t9wdZmBVRjWhSd3JIvexnF2XElLmi3ZOpAAJkiOvIRVpxK02IxCowKnOFIP0QYO45QCZpG7ftYizZyqLRUSCIJU8gY5c/bV52dxt5btsXVW4oDKLixmAynfafbtNa39iSdV2ap+k9l9NbRVjLbWBJ7oOw/vwrnzprXQP0g4RmxchTDKuUnnAgx5GtRxnDbluC9tkDSVLAjMOqzuPKrT0jl5ovJmPAMQLdwllzKAWy9SusUp2h7R3sVda48KCdEGgAgADqdBzpvB4O4r+ky6KDqeQ2HzqgxdshiepPv50l2ZyyUTrHYvtJcbCoL4Dhn9FbZTDrlVmJuSCDsAK0nifavErdvJnBl2ViyrqEaFGg0Ag++vOy3EzZDKbhyQGydWUEjLOx1Ovj5UYvA2CWfK0kknU9XJjbQlSP8AkvWp0pdGrnOUFTIbHG85UZDmYjORsdpP8ImTTOI4orXmzZiSdVmcxA9XMesRPWkcPw+2WLI7KAYHumfIgN5BGJ2q54PwRcbbY2iLbo4UNByvAJOg9XdT4U3T2HHfT7EeBq2Ke6iqttAjGWaQglYExJOh/pWxYTCK+YEKjrOV8wbroI0PUyI1rXzhcRhRctsuUNCuwHcJBmMwGv8A7Ui4lLD5QwfX1htHIj++dZTt6R1/jT+NO/8A3h5ikuSRbAi0pLxIgZ+p2WWAjxqnLyTOpPu8prccIqpZvX7khLkBFEBnuLMBP4VJksdNo12165icOpDvabOSSSsBD4BZifHnrVOOv5HyySlrr/BNaGS0ELgM+gLTAUDnAPIRSOOPckiOkQRIABiOR0PhBmvMXxFbzGEMDbXalrl0sy6nSAPCNJ86mCf2YfkSjVxZFafWD0rKw7aw0EA6zv4VjcTcxHOOcV4h2gHmPM9K0OO3exzEYvNYydLk+PqEVVpuPOsjXmWrEeYrb20qabvqYpUiqiJ9mNYmsorw1Qzbgw61r15DmOo3r6TwXZ3DWzK4fDp5LmPviqntn2DtY3K6MLd4QubKMpXoVGpI5H2eXJCdM7vyIPkX9DhNzW0qj6LGfbt9/uqfguHzMxyyFR2bwAGp91dU4VZspgsRwtltDE/5iI7AZWZtiXA7p5AnwrX+znAnwyY39YUKy4e+MhZTJ9E4MkSMsEnxIFbRkt2cz455J+V/g55h8M1xgqqWZjAUCSSdgANzXSLXYTE4XDPce2ogAucykjUaCDtWn9jMQyY2wyLmIuLpE6T3vszXae2vaB7ts4Syktc9cmAFVSCdzEmNJqORvov8dV+o1vgvYnE3rKXVyBXEjMxB38vCufcawLWsVetNBZbhBI2kdK6jxzt3d4fZtWTbX0voxlUFYAGmZzrG23ODXMjZv3kv4xxpLMznQM7H1V6nXYbAVmrN5St0/oo7neYmNF5e2PmaxS4w2Nbl+i7hfp72IBVGAw14d7kzQqkcgZnU+NNHsUcRh7VywLSMYzl7j8gZ0ggawYrS/oxim9o0uziTIBq0e0Qq3gwBzhAJ7xIGbMB0GgnxFQ4zg5s3LwLq3oMuYjZszInd6wX9wNW3Yrg/67iltg9xRmc/wiJieZJA9tRKls0hL6GT2fZsPcxbHKqAGMnrMzBVCkQBJafDWs+z3DRiL1tXB9GBNxh6wUTopPMxoPbsDXRf0hoi4G7OUt3AD3QZzrrAAG3Sta7BY70NrF95dbakSNdLbHu+1j7qlS+0ayS6Hf0b8A9Ol1yxVQVAjmYJPuEe+tswPBIvtbRpCLJY9Tyqr/R5xNVw62UADiWcMcpJJifERlHsFXVizeF13LgIxJ7jtMcp7uppSlsqCdaG+Ldn/TJFy5oiEKAB3Toc0xqZFcZxOMuYt8NYOuWUX/m/P4D2V2oHQgs5kHd2mDpXO+B8Bt2eLJbRi4tW/SNm/eMwBHTMp9lOPItkShIk4/2RfI+Vx6K1uT9IgjbTXzNaRb7OXMRdFhIzAONdB3YYkTvEr7/Cu1cc4cby5RcZR+7plnkT3Z06eFI4DgwtMz+l77+sQicv3ZBIGvwqFy0W+LI4fx/hn6rfa0DLrkkTIByhiJ56xpGx361pdjvt016KP/4FbT+kqxGMZ5Yl1ViWUKSR3JgAaQo1jrWp3LhB510xdqzg5VjJoduYkm0baLBMjfkQoPwDa/xt1qHDXHQqFYgLsQSJJ3Onu8gKucD2Sx91Fe3hnZWAKsCsEESCJak8Jwp3vCw7JaYmP8wkCdgDAJ1OnSlkgxl4XeFvG/hLiFmZvScySfokROsTNVg4S7s5ykC0oe7sGVZUMQDzE7VtdnsjeweW6WZWQhs8AoCuoMagx41q/GOJXLr37rPrcZQ5AAzic2w03RTpWalvR3qK+J5rdf8AZlxDiDXSoiFURbQeqi9PE9SdzVVjcG7ciYEkCTAG5PlVxwXDoYa56hOoVlDEDpm2510zhHaDhy2mtJaW3KspLDMTmUqczBmZt+nsoyp2Q45KjlWKuWWyehQKq2rYaAAS4UBy3VpnWqbEsRosid/6eFN20KqfOK6d2h4B6bA2Ws2lACIJV0bNC6EbakgVeSu2Yy43KNHJLN/YNrGgJ+/8a9eAYHuq4xXZ9lMMGSCB3htPlVlb7LWruHmzdZsQpMqVhGWBoGE5W6TofDem5Iy+ObXRUcKIKkMFOvMCdaYuYe3+6vuFK8PvXLDMYG8MGUMsjkwIMc+hrofZnC4DHW4KravgS9sAgEfvIRqV+XuJiTo6OGacVFrZz25hbf7g+P40u2Ct/u/E11TF/o7t/Qb3MfvmqDG9g7i+qzR4wflFJcn8mjgn/pRojYC3/EPaPwqI8PT95vhWyYns1fXofYR+NV78Kvg+pPt/GrU/5Mnxx8Os/tthhtcn/arH5A1r/aXtTjLpyYZlS2wAzFXV9dyWZcqjlprVAuHgR6QkeH/tYm0g5AnxBn41mmkavJoscFgCoUnE2wwMswdSB4gZPmaU7f8AHLZYG1iDcusMtwoIshcuX1STmcg7g6R1pHE3FiC505A/10qiOGWenhFWmm7MZtpUi27Blrd70wSQNM0hVBJEgkkEiOkmuh4vtfZtFrzDPEkEqJA5KstvymK5cl51jICB5A/dSXGrlw5A53kx7tfjT3JiU1CGkP3Mc+MxLYi8JDvqA0f7ba8wIAEj5mrntLxUvaWzlt2ktqwW3bkgSPpSx1+Opqk4bgJtqQ4EiTvI+NWWH4YrEd0nxMxUykrHCMsf6mHYjja4dnzgsrqAVmAYMjMTy3racTjrxEW7OHsrvu7b8+53aoXwFsf6KnxyiTXlzBAnU3B8I9kVnKUXs0hGUVRDx7BlbVxnvW5IByKrDMcwgSd9flWX6PeJ+id4bIWGXMBJ1j7xzqDi2GT0QtrJ7wPt8/KeVK4Hgt9GzKoK9C8e+Ku04UZtSXImkbjx+9ntMPSXHbMriVYgkciY21Og8Kb4Otlcl5LUOB/GATGpKs2u58KT4VeuWlgHLO4mRP8AyqVpH05nWAAPlpWDl4dSX2zYhxogyEAPhp8hXrdpXB1QEecH31T2MJaP+uF8Mp+c1Z4Xht63LWzacHrB+7T2GhWxuRFiO1VzXKYHQ6/dXlvDX/1r9ZtBmLJlZibcddAD5fGrq3YLoBdt2weiiR7Ohpf/AAeyDIUg9Qzj5NWqSRDbZl+0N1GCXAo2kkaiefP4U9b4xaJ0uJ7THzpLFcPt3IzqZAiZM++dfbVRjeG2kkj0xInRVzcp3Aqca6KUjSu1lx8ZxC76KXy9yBHq24UkdRM++tae2c/o4/zM2XLzmYj310HhVgXGe4Vs2bpLSCpQspIMg/S1+Vax20wDYe/bvDus0MCpB7ynQyPZ7q3g94nFy8dLNv7HOz3bXEYE/q90E2xsCTNuf3YPq+HL4VLxzLicO+OVSCWUaQQDMMGMyNDOo6VTdoOONiLCC7lLl8ywoBVQADrEwZ5nl4Vh2Zw1zOrtbm1zzoGTXmA2hPiPfRiv3dCzl+xbX/B1Ls/xzEHDWzfzFoMkqdRJCkzziPOtZ/SMyGyjLAm4JAED1XM/D504cUhAylEI2K5094gj41Q9teIPeNmyz22Clu8pUmTAlgOQHv1rGK/VaOrklXHTLSzwIpatghWOQZj0JEkePnUDcFWfwgfOtgt38yKoRWhQMyHUwInukj4VXY20HGVjcXxVxI8NVqL32aUqNIxgm+Ut6DMFE8zoJMdTV3wztBfwDNYvW5RtcrbA/vL4V7iOBWw2cPcLAhpaCZHWBrtTOO/z7TW3EzqG10I2OtaZRejnwmrf2Tt2pdv/AMe0Vb+FteXrTWWD7S5BBw6RM6Fh86qeyMqTYu2pBBdJKrGuU6tuJ8dwa2i9wZd/RkeQn4qx+VU4JaocJuSspbvELb4hbyWyk6XlOq3F8RzNYdpMDZUfreEJtXEIJCkgRsSuvdPloROlWl7hyDdip/ilT8QKRxXDGZGCENIiCdNeuUmkk7G0mmXHZLti+IQpeALqB3wIzDqRsGq7biHRh7a0DhGBu4bNKHvROumkxA351drdbwqJ1ei+NvHfZc4jGg7qD5UhcNudjSxumozepF2cz/xu/wDWfAfhXn+MXv3h/Kv4VX0V3Yrw8zKXo23EbhMyPYqj7q8GPufvfAUrRTxXgsmPf4td/e+A/Cl7mJZtSQfMCoaKMUvoHJvsYTGuNmjyApj/ABvEfWt8PwqvopYx8GpSX2WA43iB/qt8Pwr0ccxH1h9oH4VXUUYR8DOXrLP/AB7ETPpNf9q/hUqdpsUP9T7Cflqnoowj4P5Jesuz2rxf1o/kT8tY/tPit/SD+RPy1TUUYR8QfJP1l1+1OK+sH8iflrz9qMV9b9hPy1TUUvjh4g+SfrL5O2ONX1cQw8gv4Uwnb/iAEfrHvS2T/wDrWs0U8I+B8kvWbP8At/xD/wCR/wBdr8teHt9xA73x/wDXb/LWs0UYrwWcvTZD25xxEG8COhtWvyVU8Q4vevtmuPJAgAKqqAOiqAB7qRop0kJyb7JlxLAgyNOoB+BFWI7S4rb0v2V/CqiihxT7QKTXTLf9psT9YP5E/LWL9ocQd3B/4W/y1VUUsI+FfJL1llb49iF2uR/xX8KZ/a3GbG+T5qh+a1SUUYR8D5Jestf2hxH1n2U/CvH7Q4k73fsr9wqroowj4HyS9ZcntRiiuU3FYdSlsn+bLNZYXtXjLZlLxH/FY90VSUU8V4LOXpsp7d4/68f/AF2/y0pd7U4ljJa2T19FaB+C1S0UYoM5elo3aDEH6Y/lX8KP8fxH1n2V/CquiljHwM5eluO0uK+t+yn4V7+02K+s+yn4VT0UYR8DOXrCiiiqJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z'
    }

    render() {
        
        const { profileImg } = this.state;
        const { isLeftMenuOpend, sUser } = this.props;

        const UserPanel = () => {
            return(
            <div className={cx('user-panel')}>
                <ProfileImg></ProfileImg>
                <UserInfo></UserInfo>
            </div>
            )
        }

        const ProfileImg = () => {
            const altTxt = 'use-profile-img';
            return(
                <div className={cx('profile-img')}>
                    <img className={cx('img-circle')} src={profileImg} title={altTxt} alt={altTxt}></img>
                </div>
            )
        }

        const UserInfo = () => {
            return(
                <div className={cx('user-name')}>
                        {
                            (() => {
                            if (sUser == null) {
                                return (<span>Loading...</span>);
                            } else if(sUser === 'noLogin'){
                                return (<span>Please loging...</span>);
                            } else if(typeof(sUser) === 'object'){
                                return (<span>Hello {sUser.userNm}</span>);
                            } else{
                                console.log(typeof(sUser));
                            }
                            })()
                        }
                </div>
            )
        }

        return (
            <aside className={cx('left-menu', isLeftMenuOpend ? 'active' : '')}>
                <section className={cx('left-wrap')}>
                    <UserPanel></UserPanel>
                    <div></div>
                    <div></div>
                </section>
            </aside>
        )
    }
}

export default LeftMenu;