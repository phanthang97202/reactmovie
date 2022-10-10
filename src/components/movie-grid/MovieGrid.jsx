import React, {useState, useEffect, use, useCallback} from 'react';
import { useHistory, useParams } from 'react-router';
import MovieCard from '../movie-card/MovieCard';
import './movie-grid.scss';
import tmdbApi, { tvType, category, movieType } from "../../api/tmdbApi";
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/Input';

const MovieGrid = (props) => {
  // console.log(props.category)
  // console.log(category)

    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const {keyword} = useParams()
    // console.log(props.keyword)

    useEffect(() => {
      const getList = async () => {
        let response = null;
        if (keyword === undefined) {
          const params = {};

          // lấy category của movie hoặc k thì mặc định vào tvList
          switch (props.category) {
            case category.movie:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
              console.log(response.data);
              break;
            default:
              response = await tmdbApi.getTvList(tvType.popular, { params });
          }
        } else {
          const params = {
            query: keyword,
          };
          response = await tmdbApi.search(props.category, { params });
        }
        setItems(response.results);
        setTotalPage(response.total_pages);
      };
      getList();
    }, [props.category, keyword]);

    // hiện thêm danh sách phim 
    const loadMore = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {
          page: page + 1,
        };
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          page: page + 1,
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems([...items, ...response.results]);
      setPage(page + 1);
    };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
        {
            page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore}>
                        Load More
                    </OutlineButton>
                </div>
            ) : null
        }
    </>
  );
}

const MovieSearch = (props) => {

    const history = useHistory();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')

    const goToSearch = useCallback(() => {
            if(keyword.trim().length > 0){
                // history.push(`${category[props.category]}/search/${keyword}`)
                history.push(`/search/${props.category}/${keyword}`);
                // history.push(`/${category[prop s.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    )

    useEffect( () => {
        const enterEvent = (e) => {
            e.preventDefault();
            if(e.keyCode === 13) {
                goToSearch()
            }
        }
        document.addEventListener('keyup', enterEvent)
        return () => {
            document.removeEventListener("keyup", enterEvent);
        }
    }, [keyword, goToSearch])
    
    return (
        <div className='movie-search'>
            <Input
                type="text"
                placeholder="Search your movie..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <Button  className="small" onClick={goToSearch}>
                Search
            </Button>
        </div>
    )
}

export default MovieGrid