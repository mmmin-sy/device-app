import * as Styled from './Pagination.styles';
import { 
    MdKeyboardDoubleArrowLeft,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardDoubleArrowRight
} from 'react-icons/md';

interface PaginationProps {
    totalCount: number;
    currentPage: number;
    itemCountPerPage?: number;
    showPageCount?: number;
    onChangePage: (page: number) => void;
}

const Pagination = ({ 
    totalCount, 
    currentPage,
    itemCountPerPage = 10,
    showPageCount = 5,
    onChangePage
}: PaginationProps) => {

    const totalPageCount = Math.ceil(totalCount/itemCountPerPage); // Total 7 page
    const whichSetNow = Math.floor(currentPage/showPageCount) + 1 // which set now : 2

    const startPageNumber = showPageCount * (whichSetNow - 1) + 1;
    const endPageNumber =  (startPageNumber + ( showPageCount -1) > totalPageCount) ? totalPageCount : startPageNumber + ( showPageCount -1);

    const getPages = (): React.ReactNode[] => {
        let resultPage = [];
        for (let i = startPageNumber; i<= endPageNumber ; i++) {
            resultPage.push(<Styled.Link onClick={() => onChangePage(i)} isCurrentPage={currentPage===i}>{i}</Styled.Link>)
        }
        return resultPage;
    }

    const goPrev = () => {
        if(currentPage - 1 > 0) {
            onChangePage(currentPage - 1)
        }
    }

    const goNext = () => {
        if(currentPage < totalPageCount) {
            onChangePage(currentPage + 1)
        }
    }

    return (
        <Styled.Container>
            <Styled.Pagination>
                <Styled.Link onClick={() => onChangePage(1)}>
                    <MdKeyboardDoubleArrowLeft fontSize={20} />
                </Styled.Link>
                <Styled.Link onClick={() => goPrev()}>
                    <MdKeyboardArrowLeft fontSize={20} />
                </Styled.Link>

                {getPages()}

                <Styled.Link onClick={() => goNext()}>
                    <MdKeyboardArrowRight fontSize={20} />
                </Styled.Link> 
                <Styled.Link onClick={() => onChangePage(totalPageCount)}>
                    <MdKeyboardDoubleArrowRight fontSize={20} />
                </Styled.Link>
            </Styled.Pagination>
            
        </Styled.Container>
    );
}

export default Pagination;