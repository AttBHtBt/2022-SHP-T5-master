package shp_t5.newknews.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import shp_t5.newknews.dto.KeywordDto;
import shp_t5.newknews.dto.TestNewsDto;


import java.io.*;
import java.nio.charset.Charset;
import java.util.ArrayList;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Api(tags = {"Keyword API"})
@CrossOrigin(origins="http://localhost:3000", methods={RequestMethod.GET, RequestMethod.POST})
public class KeywordController {
    List<KeywordDto> listKeywordDto = new ArrayList<>();
    KeywordController() throws IOException {
        File keywordcsv = new File("C:\\Users\\82105\\OneDrive\\바탕 화면\\산협프 newknews\\2022-SHP-T5\\server\\newknews\\src\\main\\resources\\csv\\keyword_test_file.csv");

        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(keywordcsv),"UTF-8"));
        Charset.forName("UTF-8");

        String newsline = "";

        while((newsline = br.readLine())!=null) {
            String testCut[] = newsline.split(",");

            KeywordDto keywordDto = new KeywordDto(testCut[0], testCut[1]);
            listKeywordDto.add(keywordDto);
        }


    }

    @ApiOperation(value = "키워드 전송", notes = "키워드 csv파일에서 우선순위와 키워드를 제공하는 API입니다.")
    @GetMapping("getKeyword")
    public List<KeywordDto> getKeyword(){
        return listKeywordDto;
    }


}
