package shp_t5.newknews.dto;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.util.List;

@Data
@ApiModel(value = "뉴스 정보 list", description = "뉴스정보 list를 담기위한 Domain Class")
public class NewsListDto {
    private List<TestNewsDto> listNews;
}
